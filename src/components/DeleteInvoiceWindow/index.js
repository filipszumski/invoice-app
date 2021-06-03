import React from "react";
import { Button } from "../Button";
import { Wrapper } from "./styled";
import { displayDeleteInvoiceAlert, setStatus } from "../../store/status/status";
import { deleteInvoice } from "../../services/invoices";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toInvoices } from "../../routes";

export const DeleteInvoiceWindow = ({ id, active }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onDeleteInvoiceButtonClick = async () => {
        try {
            await deleteInvoice(id);
            dispatch(setStatus("loading"));
            dispatch(displayDeleteInvoiceAlert(false));
            history.push(toInvoices());
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Wrapper active={active}>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
            <p>
                <Button onClick={() => dispatch(displayDeleteInvoiceAlert(false))} content={"Cancel"} />
                <Button onClick={onDeleteInvoiceButtonClick} content={"Delete"} />
            </p>
        </Wrapper>
    )
}