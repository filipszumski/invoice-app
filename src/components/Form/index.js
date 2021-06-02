import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import addDays from 'date-fns/addDays'
import { Button } from "../Button";
import { Input } from "./Input";
import { StyledForm } from "./styled";
import { ItemList } from "./ItemList";
import { initialState } from "./initialState";
import { useDispatch, useSelector } from "react-redux";
import { displayForm, setStatus } from "../../store/status/status";
import { postInvoice } from "../../services/invoices";

export const Form = () => {
    const [invoice, setInvoice] = useState(initialState);
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();
    console.log(invoice);

    useEffect(() => {

        if (!invoice.id) {
            return;
        };

        (async () => {
            try {
                console.log("form send effect");
                await postInvoice(invoice);
                dispatch(setStatus("loading"));

            } catch (error) {
                console.error(error);
                dispatch(setStatus("error"));
            }
        })();
    }, [invoice.id])

    const updateItemsTotalValue = () => {
        let sum = 0;
        const itemTotalValueArray = invoice.items.map(item => item.total);

        for (let i = 0; i < invoice.items.length; i++) {
            sum += itemTotalValueArray[i];
        }

        return sum;
    };

    const setPaymentDue = () => {
        const createdAtDateArray = invoice.createdAt.split("-");
        const paymentDueDate = addDays(new Date(parseInt(createdAtDateArray[0], 10), parseInt(createdAtDateArray[1] - 1, 10), parseInt(createdAtDateArray[2], 10)), invoice.paymentTerms);

        if (!invoice.createdAt) {
            return ""
        }

        return format(paymentDueDate, "yyyy-MM-dd");
    };

    const setInvoiceID = () => {
        const getRandomNumber = () => {
            const randomNumber = Math.floor(Math.random() * 10);
            return randomNumber.toString();
        };

        const getRandomLetter = () => {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        };

        return `${getRandomLetter()}${getRandomLetter()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`
    };

    const onSubmitButtonClick = (status) => {
        if (status) {
            setInvoice({
                ...invoice,
                id: setInvoiceID(),
                status: status,
                total: updateItemsTotalValue(),
                paymentDue: setPaymentDue() || "",
            });
        }
        dispatch(displayForm(false));
    };

    return (
        // {/* <!-- Create new invoice form --> */ }
        //   {/* <button>Go Back</button> - mobile*/ }
        <StyledForm active={status.formActive}>
            <h2>New Invoice</h2>
            <section>
                <fieldset>
                    <legend>Bill From</legend>
                    <Input
                        id="sendersStreetAdress"
                        name="street"
                        label="Street Address"
                        type="text"
                        state={invoice}
                        setState={setInvoice}
                        objectInStateName="senderAddress"
                    />
                    <div>
                        <Input
                            id="sendersCity"
                            name="city"
                            label="City"
                            type="text"
                            state={invoice}
                            setState={setInvoice}
                            objectInStateName="senderAddress"
                        />
                        {/* pattern */}
                        <Input
                            id="sendersPostCode"
                            name="postCode"
                            label="Post Code"
                            type="text"
                            state={invoice}
                            setState={setInvoice}
                            objectInStateName="senderAddress"
                        />
                        <Input
                            id="sendersCountry"
                            name="country"
                            label="Country"
                            type="text"
                            state={invoice}
                            setState={setInvoice}
                            objectInStateName="senderAddress"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Bill To</legend>
                    <Input
                        id="clientsName"
                        name="clientName"
                        label="Client's Name"
                        type="text"
                        state={invoice}
                        setState={setInvoice}
                    />
                    <Input
                        id="clientsEmail"
                        name="clientEmail"
                        label="Client's Email"
                        type="email"
                        state={invoice}
                        setState={setInvoice}
                    />
                    <Input
                        id="clientsStreetAdress"
                        name="street"
                        label="Street Adress"
                        type="text"
                        state={invoice}
                        setState={setInvoice}
                        objectInStateName="clientAddress"
                    />
                    <div>
                        <Input
                            id="clientsCity"
                            name="city"
                            label="City"
                            type="text"
                            state={invoice}
                            setState={setInvoice}
                            objectInStateName="clientAddress"
                        />
                        {/* pattern */}
                        <Input
                            id="clientsPostCode"
                            name="postCode"
                            label="Post Code"
                            type="text"
                            state={invoice}
                            setState={setInvoice}
                            objectInStateName="clientAddress"
                        />
                        <Input
                            id="clientsCountry"
                            name="country"
                            label="Country"
                            type="text"
                            state={invoice}
                            setState={setInvoice}
                            objectInStateName="clientAddress"
                        />
                    </div>
                </fieldset>

                <div>
                    {/* change date format */}
                    <Input
                        id="invoiceDate"
                        name="createdAt"
                        label="Invoice Date"
                        type="date"
                        state={invoice}
                        setState={setInvoice}
                    />
                    <Input
                        htmlEl="select"
                        id="paymentTerms"
                        name="paymentTerms"
                        label="Payment Terms"
                        type="number"
                        state={invoice}
                        setState={setInvoice}
                    />
                </div>
                <Input
                    id="projectDescription"
                    name="description"
                    label="Project Description"
                    type="text"
                    state={invoice}
                    setState={setInvoice}
                />
            </section>

            <ItemList invoice={invoice} setInvoice={setInvoice} />

            <section>
                {/* visible only in invoice creator*/}
                <Button onClick={() => onSubmitButtonClick()} type="button" content={"Discard"} />
                <div>
                    <Button type="button" onClick={() => onSubmitButtonClick("draft")} content={"Save as Draft"} />
                    <Button type="button" onClick={() => onSubmitButtonClick("pending")} content={"Save & Send"} />
                </div>
            </section>
        </StyledForm>
    )
}