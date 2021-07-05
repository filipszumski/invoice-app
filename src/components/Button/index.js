import React from "react";

export const Button = ({ content, extraContent, onClick, type, status }) => {

    return (
        <button
            onClick={onClick}
            type={type}
            data-status={status}
        >
            {extraContent ? extraContent : ""} {content}
        </button>
    )
}