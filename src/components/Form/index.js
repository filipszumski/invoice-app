import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Buttons } from "./Buttons";
import { Input } from "./Input";
import { Select } from "./Select";
import { StyledForm } from "./styled";
import { ItemList } from "./ItemList";
import { useForm } from "./useForm";
import { useFormButtons } from "./useFormButtons";
import { initialState } from "./initialState";

export const Form = ({ id, fetchedInvoiceState }) => {
    const [invoice, dispatch] = useForm(id, fetchedInvoiceState);
    const [isValidation, setIsValidation] = useState(false);
    const [
        handleSubmit,
        onCancelButtonClick,
        onDiscardChangesButtonClick] = useFormButtons(invoice, id, dispatch, initialState);
    const status = useSelector(state => state.status);

    return (
        // {/* <!-- Create new invoice form --> */ }
        //   {/* <button>Go Back</button> - mobile*/ }
        <StyledForm active={status.formActive} onSubmit={handleSubmit}>
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
                        isValidation={isValidation}
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
                            isValidation={isValidation}

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
                            isValidation={isValidation}
                        />
                        <Input
                            id="sendersCountry"
                            name="country"
                            label="Country"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
                            objectInStateName="senderAddress"
                            isValidation={isValidation}
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
                        isValidation={isValidation}
                    />
                    <Input
                        id="clientsEmail"
                        name="clientEmail"
                        label="Client's Email"
                        type="email"
                        state={invoice}
                        dispatch={dispatch}
                        isValidation={isValidation}
                    />
                    <Input
                        id="clientsStreetAdress"
                        name="street"
                        label="Street Adress"
                        type="text"
                        state={invoice}
                        dispatch={dispatch}
                        objectInStateName="clientAddress"
                        isValidation={isValidation}
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
                            isValidation={isValidation}
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
                            isValidation={isValidation}
                        />
                        <Input
                            id="clientsCountry"
                            name="country"
                            label="Country"
                            type="text"
                            state={invoice}
                            dispatch={dispatch}
                            objectInStateName="clientAddress"
                            isValidation={isValidation}
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
                        isValidation={isValidation}
                    />
                    <Select
                        id="paymentTerms"
                        name="paymentTerms"
                        label="Payment Terms"
                        type="number"
                        state={invoice}
                        dispatch={dispatch}
                        blur={true}
                        isValidation={isValidation}
                    />
                </div>
                <Input
                    id="projectDescription"
                    name="description"
                    label="Project Description"
                    type="text"
                    state={invoice}
                    dispatch={dispatch}
                    isValidation={isValidation}
                />
            </section>
            <ItemList
                invoice={invoice}
                dispatch={dispatch}
                isValidation={isValidation}
            />
            <Buttons
                id={id}
                onCancelButtonClick={onCancelButtonClick}
                onDiscardChangesButtonClick={onDiscardChangesButtonClick}
                setIsValidation={setIsValidation}
            />
        </StyledForm>
    )
}