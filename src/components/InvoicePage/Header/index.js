import React from "react";
import { Button } from "../../Button";
import { FlexContainer } from "../../common/FlexContainer";
import { StyledHeader } from "../..//common/StyledHeader";
import { paidStatus } from "../consts";

export const Header = ({ invoice, onEditButtonClick, markAsPaid, onDeleteButtonClick }) => {

    return (
        <StyledHeader>
            <FlexContainer>
                <span>Status</span>
                <span>{invoice.status}</span>
            </FlexContainer>
            <FlexContainer>
                <Button onClick={onEditButtonClick} content="Edit" />
                <Button onClick={() => onDeleteButtonClick(true)} content="Delete" />
                {invoice.status !== paidStatus && <Button onClick={markAsPaid} content="Mark as Paid" />}
            </FlexContainer>
        </StyledHeader>
    )
}