import React from "react";
import { StyledButton } from "./styled";

export const Button = ({ content, extraContent, onClick, type, status,
    streched }) => {

    return (
        <StyledButton
            onClick={onClick}
            type={type}
            data-status={status}
            streched={streched ? true : false}
        >
            {extraContent ? extraContent : ""} {content}
        </StyledButton>
    )
};