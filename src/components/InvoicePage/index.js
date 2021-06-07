import React from "react";
import { format } from "date-fns";
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
import { paidStatus } from "./consts";

export const InvoicePage = () => {
    useFetchInvoice();
    const params = useParams();
    const invoice = useSelector(state => state.invoice);
    console.log(invoice);
    const [onEditButtonClick, onGoBackButtonClick, onDeleteButtonClick, onDeleteInvoiceButtonClick, markAsPaid] = useInvoicePageButtons(params, invoice);
    const status = useSelector(state => state.status);

    const formatDate = (dateString) => {
        const dateArrayStrings = dateString.split("-");
        const dateArrayNumbers = dateArrayStrings.map(item => parseInt(item, 10));
        return format(new Date(dateArrayNumbers[0], dateArrayNumbers[1], dateArrayNumbers[2]), "d MMM y");
    };
    return (
        <>
            <main>
                <Button onClick={onGoBackButtonClick} content={<Link to={toInvoices()}>Go Back</Link>} extraContent="<" />
                <section>
                    {status.stage === statusStage.loading
                        ? <p>Loading in progress...</p>
                        : status.stage === statusStage.error
                            ? <p>Error occurred</p>
                            : (<>
                                <section>
                                    <p>
                                        <span>Status</span>
                                        <span>{invoice.status}</span>
                                    </p>
                                    <p>
                                        <Button onClick={onEditButtonClick} content="Edit" />
                                        <Button onClick={() => onDeleteButtonClick(true)} content="Delete" />
                                        {invoice.status !== paidStatus && <Button onClick={markAsPaid} content="Mark as Paid" />}
                                    </p>
                                </section>
                                <section>
                                    <div>
                                        <header>
                                            <h2>{invoice.id}</h2>
                                            <span>{invoice.description}</span>
                                        </header>
                                        <p>
                                            <span>{invoice.senderAddress.street}</span>
                                            <span>{invoice.senderAddress.city}</span>
                                            <span>{invoice.senderAddress.postCode}</span>
                                            <span>{invoice.senderAddress.country}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <p>
                                                <span>Invoice Date</span>
                                                <span>{formatDate(invoice.createdAt)}</span>
                                            </p>
                                            <p>
                                                <span>Payment Due</span>
                                                <span>{formatDate(invoice.paymentDue)}</span>
                                            </p>
                                        </div>
                                        <p>
                                            <span>Bill To</span>
                                            <span>{invoice.clientName}</span>
                                            <span>{invoice.clientAddress.street}</span>
                                            <span>{invoice.clientAddress.city}</span>
                                            <span>{invoice.clientAddress.postCode}</span>
                                            <span>{invoice.clientAddress.country}</span>
                                        </p>
                                        <p>
                                            <span>Sent To</span>
                                            <span>{invoice.clientEmail}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <span>Item Name</span>
                                                <span>Qty.</span>
                                                <span>Price</span>
                                                <span>Total</span>
                                            </li>
                                            {invoice.items.map((item, index) => (
                                                <li key={index}>
                                                    <span>{item.name}</span>
                                                    <span>{item.quantity}</span>
                                                    <span>{item.price}</span>
                                                    <span>{item.total}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            <span>Amount Due</span>
                                            <span>${invoice.total}</span>
                                        </p>
                                    </div>
                                </section>
                            </>)}
                </section>
            </main>
            {Object.keys(invoice).length > 0 && (
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