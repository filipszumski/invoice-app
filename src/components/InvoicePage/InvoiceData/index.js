import React from "react";
import { format } from "date-fns";
import { FlexContainer } from "../../common/FlexContainer";
import {
    Paragraph as SenderAdress,
    Paragraph as ClientNameAndAdress,
    Paragraph as PaymentDue,
    Paragraph as InvoiceDate,
    Paragraph as ClientEmail,
    ItemsList,
    ListItem,
    AmountDue,
    StyledSpan,
} from "./styled";
import { Wrapper } from "../styled";

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
        <Wrapper grid>
            <FlexContainer spaceBetween>
                <header>
                    <h2>#<StyledSpan title bold highlighted>{invoice.id}</StyledSpan></h2>
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
                        <StyledSpan important bold highlighted>{formatDate(invoice.createdAt)}</StyledSpan>
                    </InvoiceDate>
                    <PaymentDue>
                        <span>Payment Due</span>
                        <StyledSpan important bold highlighted>{formatDate(invoice.paymentDue)}</StyledSpan>
                    </PaymentDue>
                </FlexContainer>
                <ClientNameAndAdress strech>
                    <span>Bill To</span>
                    <StyledSpan important bold highlighted>{invoice.clientName}</StyledSpan>
                    <span>{invoice.clientAddress.street}</span>
                    <span>{invoice.clientAddress.city}</span>
                    <span>{invoice.clientAddress.postCode}</span>
                    <span>{invoice.clientAddress.country}</span>
                </ClientNameAndAdress>
                <ClientEmail alignContentStart strech>
                    <span>Sent To</span>
                    <StyledSpan important bold highlighted>{invoice.clientEmail}</StyledSpan>
                </ClientEmail>
            </FlexContainer>
            <div>
                <ItemsList>
                    <ListItem>
                        <StyledSpan>Item Name</StyledSpan>
                        <StyledSpan justifyEnd>Qty.</StyledSpan>
                        <StyledSpan justifyEnd>Price</StyledSpan>
                        <StyledSpan justifyEnd>Total</StyledSpan>
                    </ListItem>
                    {invoice.items.map((item, index) => (
                        <ListItem key={index}>
                            <StyledSpan bold highlighted>{item.name}</StyledSpan>
                            <StyledSpan justifyEnd bold>{item.quantity}</StyledSpan>
                            <StyledSpan justifyEnd bold>${item.price}</StyledSpan>
                            <StyledSpan justifyEnd bold highlighted>${item.total}</StyledSpan>
                        </ListItem>
                    ))}
                </ItemsList>
                <AmountDue >
                    <StyledSpan amountDue>Amount Due</StyledSpan>
                    <StyledSpan amountDue important>${invoice.total}</StyledSpan>
                </AmountDue>
            </div>
        </Wrapper>
    )
}