import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button } from "../Button";
import { Form } from "../Form/";
import { DeleteInvoiceWindow } from "./DeleteInvoiceWindow";
import { useInvoicePageButtons } from "./useInvoicePageButtons";
import { useFetchInvoice } from "./useFetchInvoice";
import { Link } from "react-router-dom";
import { toInvoices } from "../../shared/routes";
import * as statusStage from "../../shared/consts/stages";
import { StyledMain } from "../StyledMain";
import { Header } from "./Header";
import { InvoiceData } from "./InvoiceData";

export const InvoicePage = () => {
    useFetchInvoice();
    const params = useParams();
    const invoice = useSelector(state => state.invoice);
    const [onEditButtonClick, onGoBackButtonClick, onDeleteButtonClick, onDeleteInvoiceButtonClick, markAsPaid] = useInvoicePageButtons(params, invoice);
    const status = useSelector(state => state.status);

    return (
        <>
            <StyledMain>
                {status.stage === statusStage.loading
                    ? <p>Loading in progress...</p>
                    : status.stage === statusStage.error
                        ? <p>Error occurred</p>
                        : (<>
                            <Button
                                onClick={onGoBackButtonClick}
                                content={<Link to={toInvoices()}>Go Back</Link>}
                                extraContent="<"
                            />
                            <Header
                                invoice={invoice}
                                onEditButtonClick={onEditButtonClick}
                                markAsPaid={markAsPaid}
                                onDeleteButtonClick={onDeleteButtonClick}
                            />
                            <InvoiceData
                                invoice={invoice}
                            />
                        </>)}
            </StyledMain>
            {Object.keys(invoice).length > 0 && status.stage === statusStage.success && (
                <Form id={params.id} fetchedInvoiceState={invoice} />
            )}
            <DeleteInvoiceWindow
                onDeleteInvoiceButtonClick={onDeleteInvoiceButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}
                active={status.deleteInvoiceActive}
            />
        </>
    )
};