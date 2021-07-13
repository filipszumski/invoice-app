import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Buttons } from "./Buttons";
import { FormSection, StyledForm, Title } from "./styled";
import { ItemList } from "./ItemList";
import { useForm } from "./useForm";
import { useFormButtons } from "./useFormButtons";
import { initialState } from "./initialState";
import { FormFields } from "./FormFields";

export const Form = ({ id, fetchedInvoiceState }) => {
    const [invoice, dispatch] = useForm(id, fetchedInvoiceState);
    const [isValidation, setIsValidation] = useState(false);
    const [
        handleSubmit,
        onCancelButtonClick,
        onDiscardChangesButtonClick] = useFormButtons(invoice, id, dispatch, initialState, fetchedInvoiceState);
    const status = useSelector(state => state.status);

    return (
        <StyledForm active={status.formActive} onSubmit={handleSubmit}>
            <Title>New Invoice</Title>
            <FormSection>
                <FormFields
                    invoice={invoice}
                    dispatch={dispatch}
                    isValidation={isValidation}
                />
            </FormSection>
            <FormSection>
                <ItemList
                    invoice={invoice}
                    dispatch={dispatch}
                    isValidation={isValidation}
                />
            </FormSection>
            <FormSection flex>
                <Buttons
                    id={id}
                    onCancelButtonClick={onCancelButtonClick}
                    onDiscardChangesButtonClick={onDiscardChangesButtonClick}
                    setIsValidation={setIsValidation}
                />
            </FormSection>
        </StyledForm>
    )
}