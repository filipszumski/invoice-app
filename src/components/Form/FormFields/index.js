import React from "react";
import { FlexContainer } from "../../common/FlexContainer";
import { Input } from "../Input";
import { Select } from "../Select";
import { Fieldset } from "./styled";

export const FormFields = ({ invoice, dispatch, isValidation }) => {

    return (
        <>
            <Fieldset>
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
                <FlexContainer>
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
                </FlexContainer>
            </Fieldset>

            <Fieldset>
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
                <FlexContainer>
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
                </FlexContainer>
            </Fieldset>

            <FlexContainer>
                <Input
                    id="invoiceDate"
                    name="createdAt"
                    label="Invoice Date"
                    type="date"
                    state={invoice}
                    dispatch={dispatch}
                    blur={true}
                    isValidation={isValidation}
                    flex
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
                    flex
                />
            </FlexContainer>
            <Input
                id="projectDescription"
                name="description"
                label="Project Description"
                type="text"
                state={invoice}
                dispatch={dispatch}
                isValidation={isValidation}
            />
        </>

    )
}