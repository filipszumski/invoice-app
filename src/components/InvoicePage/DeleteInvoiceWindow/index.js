import React from "react";
import { Button } from "../../Button";
import { Wrapper } from "./styled";

export const DeleteInvoiceWindow = ({ onDeleteInvoiceButtonClick, onDeleteButtonClick, active }) => {

    return (
        <Wrapper active={active}>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
            <p>
                <Button onClick={() => onDeleteButtonClick(false)} content={"Cancel"} />
                <Button onClick={onDeleteInvoiceButtonClick} content={"Delete"} />
            </p>
        </Wrapper>
    )
}