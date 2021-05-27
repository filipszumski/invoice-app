import React, { useEffect, useState } from "react";
import { Button } from "../../Button";
import { Input } from "./Input";

export const ItemList = ({ invoice, setInvoice }) => {
    const [effectLauncher, setEffectLauncher] = useState({
        number: Math.random(),
        index: "",
    });
    const onAddItemListButtonChange = () => setInvoice({
        ...invoice,
        items: [
            ...invoice.items,
            {
                name: "",
                quantity: "",
                price: "",
                total: ""
            }
        ]
    });

    useEffect(() => {
        // MAYBE MAKE TOTAL AMOUNT OF ITEMS ON SUMBIT - ITS NOT NECESARRY TO DO I ON EVERY INPUT CHANGE
        // TOTAL IN ITEM IS NECESSARY BECAUSE IT WILL DISPLAY VAULUE TO USER IN FORM 
        console.log("ITEM TOTAL EFFECT HAS BEEN ");

        setInvoice(invoice => ({
            ...invoice,
            items: invoice.items.map((item, index) => {
                if (effectLauncher.index === index) {
                    return {
                        ...item,
                        total: item.quantity * item.price,
                    }
                }
                return {
                    ...item,
                }
            }),
        }))
    }, [effectLauncher, setInvoice]);

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
                                setEffectLauncher={setEffectLauncher}
                            />
                            <Input
                                name="quantity"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                invoice={invoice}
                                setInvoice={setInvoice}
                                setEffectLauncher={setEffectLauncher}
                            />
                            <Input
                                name="price"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                invoice={invoice}
                                setInvoice={setInvoice}
                                setEffectLauncher={setEffectLauncher}
                            />
                            <span>{invoice.items[index].total || ""}</span>
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