import React from "react";

export const Button = ({ content, extraContent }) => {

    return (
        <button>{extraContent ? extraContent : ""} {content}</button>
    )
}