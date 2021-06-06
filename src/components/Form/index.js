import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import addDays from 'date-fns/addDays'
import { Buttons } from "./Buttons";
import { Input } from "./Input";
import { StyledForm } from "./styled";
import { ItemList } from "./ItemList";
import { initialState } from "./initialState";
import { displayForm, setStatus, getInvoicesActive } from "../../store/status/status";
import { postInvoice, getInvoice, patchInvoice } from "../../services/invoices";

export const Form = ({ id, fetchedInvoiceState }) => {
    const init = (initialState) => {
        if (!id) {
            return initialState;
        }
        return fetchedInvoiceState;
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case "replaceState":
                return payload;
            case "updateStateKey":
                return {
                    ...state,
                    [payload.target.name]: payload.type === "number" ? +payload.target.value : payload.target.value
                };
            case "updateStateObjectKey":
                return {
                    ...state,
                    [payload.objectInStateName]: {
                        ...state[payload.objectInStateName],
                        [payload.target.name]: payload.target.type === "number" ? +payload.target.value : payload.target.value
                    }
                };
            case "addListItem":
                return {
                    ...state,
                    items: [
                        ...state.items,
                        { name: "", quantity: "", price: "", total: "" }
                    ]
                };
            case "deleteListItem":
                return {
                    ...state,
                    items: state.items.filter((item, index) => index !== payload)
                };
            case "updateListItemObjectKey":
                return {
                    ...state,
                    items: state.items.map((item, index) => {
                        if (index === payload.index) {
                            return {
                                ...item,
                                [payload.target.name]: (type === "number" ? +payload.target.value : payload.target.value) || ""
                            }
                        }
                        return { ...item }
                    })
                };
            case "updateListItemObjectKeyOnInputBlur":
                return {
                    ...state,
                    items: state.items.map((item, index) => {
                        if (index === payload.index) {
                            return {
                                ...item,
                                total: item.quantity * item.price
                            }
                        }
                        return { ...item }
                    }),
                };
            default:
                return state;
        }
    };

    const [invoice, dispatch] = useReducer(reducer, initialState, init);
    const status = useSelector(state => state.status);
    const dispatchReduxAction = useDispatch();
    console.log(invoice);

    const setPaymentDue = () => {
        const createdAtDateArray = invoice.createdAt.split("-");
        const paymentDueDate = addDays(new Date(parseInt(createdAtDateArray[0], 10), parseInt(createdAtDateArray[1] - 1, 10), parseInt(createdAtDateArray[2], 10)), invoice.paymentTerms);

        if (!invoice.createdAt) {
            return "";
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

    const setInvoiceTotal = () => {
        const itemListTotalArray = invoice.items.map(item => item.total);
        let sum = 0;

        for (let i = 0; i < itemListTotalArray.length; i++) {
            sum += itemListTotalArray[i];
        }

        return sum;
    };

    const onSubmitButtonClick = (event, status) => {
        if (status) {
            (async () => {
                try {
                    dispatchReduxAction(setStatus("loading"));
                    await postInvoice({
                        ...invoice,
                        status: status,
                        paymentDue: setPaymentDue(),
                        id: setInvoiceID(),
                        total: setInvoiceTotal(),
                    });
                    dispatchReduxAction(getInvoicesActive(true));
                } catch (error) {
                    console.error(error);
                    dispatchReduxAction(setStatus("error"));
                }
            })();
        };

        if (event.target.innerText === "Save Changes") {
            (async () => {
                try {
                    dispatchReduxAction(setStatus("loading"));
                    await patchInvoice(id, {
                        ...invoice,
                        total: setInvoiceTotal(),
                        paymentDue: setPaymentDue(),
                    });
                    dispatchReduxAction(getInvoicesActive(true));
                } catch (error) {
                    console.error(error);
                    dispatchReduxAction(setStatus("error"));
                }
            })();
        }
        dispatchReduxAction(displayForm(false));
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
                        dispatch={dispatch}
                        objectInStateName="senderAddress"
                    />
                    <div>
                        <Input
                            id="sendersCity"
                            name="city"
                            label="City"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
                            objectInStateName="senderAddress"

                        />
                        {/* pattern */}
                        <Input
                            id="sendersPostCode"
                            name="postCode"
                            label="Post Code"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
                            objectInStateName="senderAddress"

                        />
                        <Input
                            id="sendersCountry"
                            name="country"
                            label="Country"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
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
                        dispatch={dispatch}
                    />
                    <Input
                        id="clientsEmail"
                        name="clientEmail"
                        label="Client's Email"
                        type="email"
                        state={invoice}
                        dispatch={dispatch}
                    />
                    <Input
                        id="clientsStreetAdress"
                        name="street"
                        label="Street Adress"
                        type="text"
                        state={invoice}
                        dispatch={dispatch}
                        objectInStateName="clientAddress"
                    />
                    <div>
                        <Input
                            id="clientsCity"
                            name="city"
                            label="City"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
                            objectInStateName="clientAddress"
                        />
                        {/* pattern */}
                        <Input
                            id="clientsPostCode"
                            name="postCode"
                            label="Post Code"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
                            objectInStateName="clientAddress"
                        />
                        <Input
                            id="clientsCountry"
                            name="country"
                            label="Country"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
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
                        dispatch={dispatch}
                        blur={true}
                    />
                    <Input
                        htmlEl="select"
                        id="paymentTerms"
                        name="paymentTerms"
                        label="Payment Terms"
                        type="number"
                        state={invoice}
                        dispatch={dispatch}
                        blur={true}
                    />
                </div>
                <Input
                    id="projectDescription"
                    name="description"
                    label="Project Description"
                    type="text"
                    state={invoice}
                    dispatch={dispatch}
                />
            </section>
            <ItemList invoice={invoice} dispatch={dispatch} />
            <Buttons
                id={id}
                onSubmitButtonClick={onSubmitButtonClick}
            />
        </StyledForm>
    )
}