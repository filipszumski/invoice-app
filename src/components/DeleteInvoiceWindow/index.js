import React from "react";
import { Button } from "../Button";
import { Wrapper } from "./styled";

export const DeleteInvoiceWindow = () => {

    return (
        <Wrapper active={false}>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
            <p>
                <Button content={"Cancel"} />
                <Button content={"Delete"} />
            </p>
        </Wrapper>
    )
}