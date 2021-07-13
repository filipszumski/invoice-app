import React from "react";
import { Button } from "../../Button";
import { Input } from "./Input";
import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from "../consts";
import { DeleteButton, List, ListItem, StyledSpan } from "./styled";

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
                    <span></span>
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
                            <StyledSpan>{invoice.items[index].total || ""}</StyledSpan>
                            <DeleteButton onClick={() => deleteListItem(index)}>
                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z" fill="#888EB0" />
                                </svg>
                            </DeleteButton>
                        </ListItem>
                    )
                })}
            </List>
            {/* should be full width */}
            <Button
                onClick={onAddItemListButtonChange}
                type="button"
                content={"+ Add New Item"}
                streched
                brigthBackground={true}
                buttonStyle={"button2"}
            />
        </>
    )
}