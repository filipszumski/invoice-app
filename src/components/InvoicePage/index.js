import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Form } from "../Form/";
import { DeleteInvoiceWindow } from "./DeleteInvoiceWindow";
import { useInvoicePageButtons } from "./useInvoicePageButtons";
import { useFetchInvoice } from "./useFetchInvoice";
import { toInvoices } from "../../shared/routes";
import * as statusStage from "../../shared/consts/stages";
import { StyledMain } from "../common/StyledMain";
import { Header } from "./Header";
import { InvoiceData } from "./InvoiceData";
import { StyledSection } from "../../components/common/StyledSection";
import { ButtonText, Button, StyledLink } from "./styled";

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
                            <Button onClick={onGoBackButtonClick}>
                                <StyledLink to={toInvoices()}>
                                    <ButtonText>Go Back</ButtonText>
                                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.3418 0.886047L0.113895 5.11395L4.3418 9.34185" stroke="#7C5DFA" stroke-width="2" />
                                    </svg>

                                </StyledLink>
                            </Button>
                            <StyledSection>
                                <Header
                                    invoice={invoice}
                                    onEditButtonClick={onEditButtonClick}
                                    markAsPaid={markAsPaid}
                                    onDeleteButtonClick={onDeleteButtonClick}
                                />
                                <InvoiceData
                                    invoice={invoice}
                                />
                            </StyledSection>
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