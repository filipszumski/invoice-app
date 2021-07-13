import React from "react";
import { useDispatch } from "react-redux";
import { displayForm } from "../../../store/status/status";
import { Button } from "../../Button";
import { FlexContainer } from "../../common/FlexContainer";
import { Filter } from "./Filter/index";
import { StyledParagraph, StyledTitle, StyledHeader } from "./styled";

export const Header = ({ filtredInvoices, checkedFilters, filters, setFilters }) => {
    const dispatch = useDispatch();

    return (
        <StyledHeader>
            <FlexContainer wraped>
                <StyledTitle>Invoices</StyledTitle>
                <StyledParagraph>
                    {filtredInvoices.length
                        ? `There are ${filtredInvoices.length} ${!checkedFilters.length || checkedFilters.length === filters.length
                            ? "total"
                            : checkedFilters.join(" & ")} invoices`
                        : "No invoices"}
                </StyledParagraph>
            </FlexContainer>
            <FlexContainer alignCenter>
                <Filter filters={filters} setFilters={setFilters} />
                <Button
                    onClick={() => dispatch(displayForm(true))}
                    content="New Invoice"
                    extraContent={
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.31311 10.0229V6.31311H10.0229V3.73278H6.31311V0.0229492H3.73278V3.73278H0.0229492V6.31311H3.73278V10.0229H6.31311Z" fill="#7C5DFA" />
                        </svg>}
                    buttonStyle={"button1"}
                    boxShadow
                />
            </FlexContainer>
        </StyledHeader>
    )
}