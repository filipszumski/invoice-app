import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { format } from "date-fns";
import { Button } from "../Button";
import { Form } from "../Form/";
import { deleteInvoice, getInvoice, patchInvoice } from "../../services/invoices";
import { toInvoices } from "../../routes";
import { DeleteInvoiceWindow } from "../DeleteInvoiceWindow";
import { displayForm, displayDeleteInvoiceAlert, setStatus, getInvoicesActive } from "../../store/status/status";

export const InvoicePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const status = useSelector(state => state.status);
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        (async () => {
            try {
                console.log("Fetch Invoice By ID Effect");
                const response = await getInvoice(params.id);
                setInvoice(response);
            } catch (error) {
                console.error(error);
                dispatch(setStatus("error"));
            }
        })();
    }, []);

    // MOMENT.JS, LUXON
    const formatDate = (dateString) => {
        const dateArrayStrings = dateString.split("-");
        const dateArrayNumbers = dateArrayStrings.map(item => parseInt(item, 10));
        return format(new Date(dateArrayNumbers[0], dateArrayNumbers[1], dateArrayNumbers[2]), "d MMM y");
    };

    const onEditButtonClick = () => dispatch(displayForm(true))

    const onGoBackButtonClick = () => history.goBack();

    const onDeleteButtonClick = (active) => dispatch(displayDeleteInvoiceAlert(active));

    const onDeleteInvoiceButtonClick = async () => {
        try {
            dispatch(setStatus("loading"));
            dispatch(displayDeleteInvoiceAlert(false));
            history.push(toInvoices());
            await deleteInvoice(params.id);
            dispatch(getInvoicesActive(true));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
        }
    };

    const markAsPaid = async () => {
        try {
            dispatch(setStatus("loading"));
            await patchInvoice(params.id, {
                ...invoice,
                status: "paid",
            });
            dispatch(getInvoicesActive(true));
        } catch (error) {
            console.error(error);
            dispatch(setStatus("error"));
        }
    };

    return (
        <>
            <main>
                {/* add nice arrow */}
                <Button onClick={onGoBackButtonClick} content="Go back" extraContent="<" />
                <section>
                    {status.stage === "loading" || Object.keys(invoice).length === 0
                        ? <p>Loading in progress...</p>
                        : status.stage === "error"
                            ? <p>Error occurred</p>
                            : (
                                <>
                                    <section>
                                        <p>
                                            <span>Status</span>
                                            <span>{invoice.status}</span>
                                        </p>
                                        <p>
                                            <Button onClick={onEditButtonClick} content="Edit" />
                                            <Button onClick={() => onDeleteButtonClick(true)} content="Delete" />
                                            {invoice.status !== "paid" && <Button onClick={markAsPaid} content="Mark as Paid" />}
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
                                </>
                            )}
                </section>
            </main>
            {status.stage === "success" && Object.keys(invoice).length > 0 && (
                <>
                    <Form id={params.id} fetchedInvoiceState={invoice} />
                    <DeleteInvoiceWindow
                        onDeleteInvoiceButtonClick={onDeleteInvoiceButtonClick}
                        onDeleteButtonClick={onDeleteButtonClick}
                        active={status.deleteInvoiceActive}
                    />
                </>
            )}
        </>
    )
}