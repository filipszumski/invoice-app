import React from "react";

export const Input = ({ name, type, indexRender, itemRender, invoice, setInvoice }) => {
    const onInputChange = ({ target }) => setInvoice({
        ...invoice,
        items: invoice.items.map((item, index) => {
            if (index === indexRender) {
                return {
                    ...item,
                    [target.name]: target.value
                }
            }
            return { ...item }
        })
    })

    return (
        <input
            name={name}
            type={type}
            value={itemRender.name}
            onChange={onInputChange}
        />
    )
}