import React from "react";
import { format } from "date-fns";
import { FlexContainer } from "../../FlexContainer";
import {
    Data as SenderAdress,
    Data as ClientNameAndAdress,
    Data as PaymentDue,
    Data as InvoiceDate,
    Data as Dates,
    Data as ClientEmail,
} from "./styled";

export const InvoiceData = ({ invoice }) => {
    const formatDate = (dateString) => {
        if (!dateString) {
            return "";
        }
        const dateArrayStrings = dateString.split("-");
        const dateArrayNumbers = dateArrayStrings.map(item => parseInt(item, 10));
        return format(new Date(dateArrayNumbers[0], dateArrayNumbers[1], dateArrayNumbers[2]), "d MMM y");
    };

    return (
        <section>
            <FlexContainer spaceBetween>
                <header>
                    <h2>#{invoice.id}</h2>
                    <span>{invoice.description}</span>
                </header>
                <SenderAdress>
                    <span>{invoice.senderAddress.street}</span>
                    <span>{invoice.senderAddress.city}</span>
                    <span>{invoice.senderAddress.postCode}</span>
                    <span>{invoice.senderAddress.country}</span>
                </SenderAdress>
            </FlexContainer>
            <FlexContainer>
                <FlexContainer directionColumn strech>
                    <InvoiceDate>
                        <span>Invoice Date</span>
                        <span>{formatDate(invoice.createdAt)}</span>
                    </InvoiceDate>
                    <PaymentDue>
                        <span>Payment Due</span>
                        <span>{formatDate(invoice.paymentDue)}</span>
                    </PaymentDue>
                </FlexContainer>
                <ClientNameAndAdress strech>
                    <span>Bill To</span>
                    <span>{invoice.clientName}</span>
                    <span>{invoice.clientAddress.street}</span>
                    <span>{invoice.clientAddress.city}</span>
                    <span>{invoice.clientAddress.postCode}</span>
                    <span>{invoice.clientAddress.country}</span>
                </ClientNameAndAdress>
                <ClientEmail alignContentStart strech>
                    <span>Sent To</span>
                    <span>{invoice.clientEmail}</span>
                </ClientEmail>
            </FlexContainer>
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
    )
}