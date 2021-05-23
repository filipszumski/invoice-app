import React from "react";
import { Button } from "../Button";

export const ItemList = ({ invoice, setInvoice }) => {
    const onAddItemListButtonChange = () => setInvoice({
        ...invoice,
        items: [
            ...invoice.items,
            {
                name: "",
                quantity: 0,
                price: "",
                total: ""
            }
        ]
    });

    return (
        <section>
            <h3>Item List</h3>
            <ul>
                <li>
                    <span>Item Name</span>
                    <span>Qty.</span>
                    <span>Price</span>
                    <span>Total</span>
                </li>
                {/* generate elements */}
            </ul>
            {invoice.items.length > 0 && invoice.items.map((item, indexRender) => {
                return (
                    <li key={indexRender}>
                        <input
                            name="name"
                            type="text"
                            value={item.name}
                            onChange={({ target }) => setInvoice({
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
                            })}
                        />
                        <input
                            name="quantity"
                            type="number"
                            value={item.quantity}
                            onChange={({ target }) => setInvoice({
                                ...invoice,
                                items: invoice.items.map((item, index) => {
                                    if (index === indexRender) {
                                        return {
                                            ...item,
                                            [target.name]: +target.value
                                        }
                                    }
                                    return { ...item }
                                })
                            })}
                        />
                        <input
                            name="price"
                            type="number"
                            value={item.price}
                            onChange={({ target }) => setInvoice({
                                ...invoice,
                                items: invoice.items.map((item, index) => {
                                    if (index === indexRender) {
                                        return {
                                            ...item,
                                            [target.name]: +target.value
                                        }
                                    }
                                    return { ...item }
                                })
                            })}
                        />
                        <input
                            name="total"
                            type="number"
                            value={item.total}
                            onChange={({ target }) => setInvoice({
                                ...invoice,
                                items: invoice.items.map((item, index) => {
                                    if (index === indexRender) {
                                        return {
                                            ...item,
                                            [target.name]: +target.value
                                        }
                                    }
                                    return { ...item }
                                })
                            })}
                        />
                    </li>
                )
            })}
            {/* should be full width */}
            <Button
                onClick={onAddItemListButtonChange}
                type="button"
                content={"+ Add New Item"}
            />
        </section>
    )
}