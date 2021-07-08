import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "../Form";
import { useFetchInvoices } from "./useFetchInvoices";
import * as statusStage from "../../shared/consts/stages";
import { Header } from "./Header";
import { InvoiceList } from "./InvoiceList";
import { StyledMain } from "../StyledMain";

export const InvoicesPage = () => {
    useFetchInvoices();
    const [filters, setFilters] = useState([
        { id: 0, type: "checkbox", name: "draft", label: "Draft", checked: false },
        { id: 1, type: "checkbox", name: "pending", label: "Pending", checked: false },
        { id: 2, type: "checkbox", name: "paid", label: "Paid", checked: false },
    ]);

    const status = useSelector((state) => state.status);
    const checkedFilters = (filters.filter(item => item.checked)).map(object => object.name);
    const filtredInvoices = useSelector(state => {
        const invoices = state.invoices;

        if (checkedFilters.length === 0) {
            return invoices;
        }
        return invoices.filter(invoice => checkedFilters.includes(invoice.status));
    });

    return (
        <>
            <StyledMain noInvoices={!filtredInvoices.length}>
                {status.stage === statusStage.loading
                    ? <p>Loading in progress...</p>
                    : status.stage === statusStage.error
                        ? <p>Error occurred</p>
                        : (<>
                            <Header
                                filtredInvoices={filtredInvoices}
                                checkedFilters={checkedFilters}
                                filters={filters}
                                setFilters={setFilters}
                            />
                            <InvoiceList
                                filtredInvoices={filtredInvoices}
                            />
                        </>)}
            </StyledMain>
            <Form />
        </>
    )
};