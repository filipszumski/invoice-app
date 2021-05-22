import React from "react";
import { Wrapper } from "./styled";

export const DeleteInvoiceWindow = () => {

    return (
        <Wrapper active={false}>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
            <p>
                <button>Cancel</button>
                <button>Delete</button>
            </p>
        </Wrapper>
    )
}