import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "./Input";
import { StyledForm } from "./styled";
import { ItemList } from "./ItemList";
import { initialState } from "./initialState";
import { useSetInitialID } from "./useSetInitialID";
import { useSetPaymentDue } from "./useSetPaymentDue";


export const Form = () => {
    const [invoice, setInvoice] = useState(initialState);
    useSetInitialID(invoice, setInvoice);
    useSetPaymentDue(invoice, setInvoice);
    console.log(invoice);

    // STATUS
    // TOTAL

    return (
        // {/* <!-- Create new invoice form --> */ }
        //   {/* <button>Go Back</button> - mobile*/ }
        <StyledForm active={true}>
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
                <Button content={"Discard"} />
                <div>
                    <Button content={"Save as Draft"} />
                    <Button content={"Save & Send"} />
                </div>
            </section>
        </StyledForm>
    )
}