import React from "react";
import { Button } from "../../Button";
import { Input } from "./Input";

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
                {invoice.items.length > 0 && invoice.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <Input
                                name="name"
                                type="text"
                                liIndex={index}
                                liItem={item}
                                invoice={invoice}
                                setInvoice={setInvoice}
                            />
                            <Input
                                name="quantity"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                invoice={invoice}
                                setInvoice={setInvoice}
                            />
                            <Input
                                name="price"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                invoice={invoice}
                                setInvoice={setInvoice}
                            />
                            <Input
                                name="total"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                invoice={invoice}
                                setInvoice={setInvoice}
                            />
                        </li>
                    )
                })}
            </ul>
            {/* should be full width */}
            <Button
                onClick={onAddItemListButtonChange}
                type="button"
                content={"+ Add New Item"}
            />
        </section>
    )
}