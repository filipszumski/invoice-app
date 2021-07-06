import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { displayForm, setStatus } from "../../store/status/status";
import { Button } from "../Button";
import { toInvoice } from "../../shared/routes";
import { Form } from "../Form";
import { useFetchInvoices } from "./useFetchInvoices";
import * as statusStage from "../../shared/consts/stages";
import { Filter } from "./Filter";

export const InvoicesPage = () => {
    useFetchInvoices();
    const [filters, setFilters] = useState([
        { id: 0, type: "checkbox", name: "draft", label: "Draft", checked: false },
        { id: 1, type: "checkbox", name: "pending", label: "Pending", checked: false },
        { id: 2, type: "checkbox", name: "paid", label: "Paid", checked: false },
    ]);

    const status = useSelector((state) => state.status);
    const dispatch = useDispatch();
    const checkedFilters = (filters.filter(item => item.checked)).map(object => object.name);
    console.log(checkedFilters);
    const filtredInvoices = useSelector(state => {
        const invoices = state.invoices;

        if (checkedFilters.length === 0) {
            return invoices;
        }
        return invoices.filter(invoice => checkedFilters.includes(invoice.status));
    });

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
                                    <p>{filtredInvoices.length
                                        ? `There are ${filtredInvoices.length} ${!checkedFilters.length || checkedFilters.length === filters.length
                                            ? "total"
                                            : checkedFilters.join(" & ")} invoices`
                                        : "No invoices"}</p>
                                </div>
                                <div>
                                    <Filter filters={filters} setFilters={setFilters} />
                                    <Button onClick={() => dispatch(displayForm(true))} content="New Invoice" extraContent="+" />
                                </div>
                            </header>
                            <section>
                                {filtredInvoices.length === 0
                                    ? <>
                                        <h2>There is nothing here</h2>
                                        <p>Create an invoice by clicking the <strong>New Invoice</strong> button and get started</p>
                                    </>
                                    : filtredInvoices.map((invoice) => (
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