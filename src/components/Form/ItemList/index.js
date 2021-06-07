import React from "react";
import { Button } from "../../Button";
import { Input } from "./Input";
import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from "../stateActionsConsts";

export const ItemList = ({ invoice, dispatch }) => {
    const onAddItemListButtonChange = () => {
        return dispatch({
            type: ADD_LIST_ITEM, payload: {
                name: "",
                quantity: "",
                price: "",
                total: "",
            }
        })
    };

    const deleteListItem = (index) => dispatch({ type: DELETE_LIST_ITEM, payload: index });

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
                                state={invoice}
                                dispatch={dispatch}
                                blur={false}
                            />
                            <Input
                                name="quantity"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                state={invoice}
                                dispatch={dispatch}
                                blur={true}
                            />
                            <Input
                                name="price"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                state={invoice}
                                dispatch={dispatch}
                                blur={true}
                            />
                            <span>{invoice.items[index].total || ""}</span>
                            <Button type="button" content="delete item" onClick={() => deleteListItem(index)} />
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