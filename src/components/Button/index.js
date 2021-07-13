import React from "react";
import { StyledButton, ExtraContent } from "./styled";

export const Button = ({ content, extraContent, onClick, type, status,
    streched, boxShadow, buttonStyle, brigthBackground }) => {

    return (
        <StyledButton
            onClick={onClick}
            type={type}
            data-status={status}
            streched={streched}
            boxShadow={boxShadow}
            buttonStyle={buttonStyle}
            extraContent={extraContent}
            brigthBackground={brigthBackground}
        >
            {extraContent ? <ExtraContent>{extraContent}</ExtraContent> : ""}<span>{content}</span>
        </StyledButton>
    )
};