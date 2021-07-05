import { useReducer } from "react";
import { initialState } from "./initialState";
import * as stateActions from "./consts";

export const useForm = (id, fetchedInvoiceState) => {
    const init = (initialState) => {
        if (!id) {
            return initialState;
        }
        return fetchedInvoiceState;
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case stateActions.REPLACE_STATE:
                return payload;
            case stateActions.CLEAR_FORM:
                return payload;
            case stateActions.UPDATE_STATE_KEY:
                return {
                    ...state,
                    [payload.target.name]: payload.target.type === "number" ? +payload.target.value : payload.target.value
                };
            case stateActions.UPDATE_STATE_OBJECT_KEY:
                return {
                    ...state,
                    [payload.objectInStateName]: {
                        ...state[payload.objectInStateName],
                        [payload.target.name]: payload.target.type === "number" ? +payload.target.value : payload.target.value
                    }
                };
            case stateActions.ADD_LIST_ITEM:
                return {
                    ...state,
                    items: [
                        ...state.items,
                        { name: "", quantity: "", price: "", total: "" }
                    ]
                };
            case stateActions.DELETE_LIST_ITEM:
                return {
                    ...state,
                    items: state.items.filter((item, index) => index !== payload)
                };
            case stateActions.UPDATE_LIST_ITEM_OBJECT_KEY:
                return {
                    ...state,
                    items: state.items.map((item, index) => {
                        if (index === payload.index) {
                            return {
                                ...item,
                                [payload.target.name]: (payload.target.type === "number" ? +payload.target.value : payload.target.value) || ""
                            }
                        }
                        return { ...item }
                    })
                };
            case stateActions.UPDATE_LIST_ITEM_OBJECT_KEY_ON_INPUT_BLUR:
                return {
                    ...state,
                    items: state.items.map((item, index) => {
                        if (index === payload.index) {
                            return {
                                ...item,
                                total: item.quantity * item.price
                            }
                        }
                        return { ...item }
                    }),
                };
            default:
                return state;
        }
    };

    const [invoice, dispatch] = useReducer(reducer, initialState, init);

    return [invoice, dispatch];
};