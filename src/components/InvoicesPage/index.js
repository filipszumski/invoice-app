import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { displayForm } from "../../store/status/status";
import { Button } from "../Button";
import { toInvoice } from "../../routes"

export const InvoicesPage = () => {
    const status = useSelector((state) => state.status);
    const invoices = useSelector(state => state.invoices);
    const dispatch = useDispatch();

    console.log(invoices);
    console.log(status);

    const onNewInvoiceButtonClick = () => {
        dispatch(displayForm(true));
    }

    return (
        <main>
            <header>
                <div>
                    <h1>Invoices</h1>
                    <p>There are 7 total invoices</p>
                    {/* or no incove text */}
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
                    {/* add + image */}
                    <Button onClick={onNewInvoiceButtonClick} content="New Invoice" extraContent="+" />
                </div>
            </header>

            {/*   No invoices  */}
            <section>
                {status.status === "loading"
                    ? <p>Loading in progress...</p>
                    : status.status === "error"
                        ? <p>Error occurred</p>
                        : (
                            invoices.length === 0
                                ? <>
                                    <h2>There is nothing here</h2>
                                    <p>Create an invoice by clicking the <strong>New Invoice</strong> button and get started</p>
                                </>
                                : invoices.map((invoice) => (
                                    <Link key={invoice.id} to={toInvoice(invoice.id)}>
                                        <p key={invoice.id}>
                                            <span>{invoice.id}</span>{ }
                                            <span>{invoice.paymentDue}</span>
                                            <span>{invoice.clientName}</span>
                                            <span>{invoice.total}</span>
                                            <span>{invoice.status}</span>
                                        </p>
                                    </Link>
                                ))
                        )}
            </section>
            {/* <!-- No invoices end --> */}
            {/* or invoices List */}
        </main>
    )
}