import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { displayForm, setStatus } from "../../store/status/status";
import { Button } from "../Button";
import { toInvoice } from "../../shared/routes";
import { Form } from "../Form";
import { useFetchInvoices } from "./useFetchInvoices";
import * as statusStage from "../../shared/consts/stages";

export const InvoicesPage = () => {
    useFetchInvoices();
    const status = useSelector((state) => state.status);
    const invoices = useSelector(state => state.invoices);
    const dispatch = useDispatch();

    return (
        <>
            <main>
                {status.stage === statusStage.loading
                    ? <p>Loading in progress...</p>
                    : status.stage === statusStage.error
                        ? <p>Error occurred</p>
                        : (<>
                            <header>
                                <div>
                                    <h1>Invoices</h1>
                                    <p>{invoices.length ? `There are ${invoices.length} total invoices` : "No invoices"}</p>
                                </div>
                                <div>
                                    <div>
                                        <select>
                                            <option disabled hidden>Filter by status</option>
                                        </select>
                                        <div>
                                            <p>
                                                <label htmlFor="draft">Draft</label>
                                                <input id="draft" type="checkbox" name="draft" />
                                            </p>
                                            <p>
                                                <label htmlFor="prending">Pending</label>
                                                <input id="prending" type="checkbox" name="prending" />
                                            </p>
                                            <p>
                                                <label htmlFor="paid">Paid</label>
                                                <input id="paid" type="checkbox" name="paid" />
                                            </p>
                                        </div>
                                    </div>
                                    <Button onClick={() => dispatch(displayForm(true))} content="New Invoice" extraContent="+" />
                                </div>
                            </header>
                            <section>
                                {invoices.length === 0
                                    ? <>
                                        <h2>There is nothing here</h2>
                                        <p>Create an invoice by clicking the <strong>New Invoice</strong> button and get started</p>
                                    </>
                                    : invoices.map((invoice) => (
                                        <Link onClick={() => dispatch(setStatus(statusStage.loading))} key={invoice.id} to={toInvoice(invoice.id)}>
                                            <p key={invoice.id}>
                                                <span>{invoice.id}</span>{ }
                                                <span>{invoice.paymentDue}</span>
                                                <span>{invoice.clientName}</span>
                                                <span>{invoice.total}</span>
                                                <span>{invoice.status}</span>
                                            </p>
                                        </Link>
                                    ))}
                            </section>
                        </>)}
            </main>
            <Form />
        </>
    )
};