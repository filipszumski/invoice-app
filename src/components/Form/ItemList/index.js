import React from "react";
import { Button } from "../../Button";
import { Input } from "./Input";
import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from "../consts";
import { List, ListItem } from "./styled";

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
        <>
            <h3>Item List</h3>
            <List>
                <ListItem>
                    <span>Item Name</span>
                    <span>Qty.</span>
                    <span>Price</span>
                    <span>Total</span>
                    <span>x</span>
                </ListItem>
                {invoice.items.length > 0 && invoice.items.map((item, index) => {
                    return (
                        <ListItem key={index}>
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
                            <Button
                                type="button"
                                content="delete item"
                                onClick={() => deleteListItem(index)}
                            />
                        </ListItem>
                    )
                })}
            </List>
            {/* should be full width */}
            <Button
                onClick={onAddItemListButtonChange}
                type="button"
                content={"+ Add New Item"}
                streched={true}
            />
        </>
    )
}