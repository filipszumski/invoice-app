import React from "react";
import { Button } from "../../Button";
import { FlexContainer } from "../../common/FlexContainer";
import { StyledSpan } from "../../common/StyledSpan";
import { paidStatus } from "../consts";
import { Wrapper } from "../styled";

export const Header = ({ invoice, onEditButtonClick, markAsPaid, onDeleteButtonClick }) => {

    return (
        <Wrapper flex>
            <FlexContainer gap>
                <StyledSpan>Status</StyledSpan>
                <StyledSpan status={invoice.status}>{invoice.status}</StyledSpan>
            </FlexContainer>
            <FlexContainer gap>
                <Button brigthBackground={true} buttonStyle={"button2"} onClick={onEditButtonClick} content="Edit" />
                <Button buttonStyle={"button4"} onClick={() => onDeleteButtonClick(true)} content="Delete" />
                {invoice.status !== paidStatus && <Button buttonStyle={"button1"} onClick={markAsPaid} content="Mark as Paid" />}
            </FlexContainer>
        </Wrapper>
    )
}