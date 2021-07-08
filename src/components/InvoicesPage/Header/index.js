import React from "react";
import { useDispatch } from "react-redux";
import { displayForm } from "../../../store/status/status";
import { Button } from "../../Button";
import { FlexContainer } from "../../FlexContainer";
import { Filter } from "./Filter/index";
import { StyledHeader, StyledParagraph, StyledTitle } from "./styled";

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
                <Button onClick={() => dispatch(displayForm(true))} content="New Invoice" extraContent="+" />
            </FlexContainer>
        </StyledHeader>
    )
}