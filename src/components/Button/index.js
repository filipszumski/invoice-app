import React from "react";

export const Button = ({ content, extraContent, onClick, type }) => {

    return (
        <button
            onClick={onClick}
            type={type}
        >
            {extraContent ? extraContent : ""} {content}
        </button>
    )
}