import React from "react";
import { Button } from "../../Button";
import { Input } from "./Input";
import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from "../consts";

export const ItemList = ({ invoice, dispatch, isValidation }) => {
    const onAddItemListButtonChange = () => {
        return dispatch({
            type: ADD_LIST_ITEM, payload: {
                name: "",
                quantity: 0,
                price: 0,
                total: 0,
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
                                isValidation={isValidation}
                            />
                            <Input
                                name="quantity"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                state={invoice}
                                dispatch={dispatch}
                                blur={true}
                                isValidation={isValidation}
                            />
                            <Input
                                name="price"
                                type="number"
                                liIndex={index}
                                liItem={item}
                                state={invoice}
                                dispatch={dispatch}
                                blur={true}
                                isValidation={isValidation}
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