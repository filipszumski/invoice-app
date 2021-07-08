import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setStatus } from "../../../store/status/status";
import { toInvoice } from "../../../shared/routes";
import * as statusStage from "../../../shared/consts/stages";
import { StyledParagraph, StyledSection } from "./styled";

export const InvoiceList = ({ filtredInvoices }) => {
    const dispatch = useDispatch();

    return (
        <StyledSection noInvoices={!filtredInvoices.length}>
            {filtredInvoices.length === 0
                ? <>
                    <h2>There is nothing here</h2>
                    <p>Create an invoice by clicking the <strong>New Invoice</strong> button and get started</p>
                </>
                : filtredInvoices.map((invoice) => (
                    <Link onClick={() => dispatch(setStatus(statusStage.loading))} key={invoice.id} to={toInvoice(invoice.id)}>
                        <StyledParagraph key={invoice.id}>
                            <span>#{invoice.id}</span>{ }
                            <span>{invoice.paymentDue}</span>
                            <span>{invoice.clientName}</span>
                            <span>{invoice.total}</span>
                            <span>{invoice.status}</span>
                        </StyledParagraph>
                    </Link>
                ))}
        </StyledSection>
    )
}