import React from "react";

export const Input = ({ name, type, liIndex, liItem, invoice, setInvoice }) => {
    const onInputChange = ({ target }) => setInvoice({
        ...invoice,
        items: invoice.items.map((item, index) => {
            if (index === liIndex) {
                return {
                    ...item,
                    [target.name]: type === "number" ? +target.value : target.value
                }
            }
            return { ...item }
        })
    })

    return (
        <input
            name={name}
            type={type}
            value={liItem[name]}
            onChange={onInputChange}
        />
    )
}