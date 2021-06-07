import { useReducer } from "react";
import { initialState } from "./initialState";

export const useForm = (id, fetchedInvoiceState) => {
    const init = (initialState) => {
        if (!id) {
            return initialState;
        }
        return fetchedInvoiceState;
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case "replaceState":
                return payload;
            case "clearState":
                return payload;
            case "updateStateKey":
                return {
                    ...state,
                    [payload.target.name]: payload.type === "number" ? +payload.target.value : payload.target.value
                };
            case "updateStateObjectKey":
                return {
                    ...state,
                    [payload.objectInStateName]: {
                        ...state[payload.objectInStateName],
                        [payload.target.name]: payload.target.type === "number" ? +payload.target.value : payload.target.value
                    }
                };
            case "addListItem":
                return {
                    ...state,
                    items: [
                        ...state.items,
                        { name: "", quantity: "", price: "", total: "" }
                    ]
                };
            case "deleteListItem":
                return {
                    ...state,
                    items: state.items.filter((item, index) => index !== payload)
                };
            case "updateListItemObjectKey":
                return {
                    ...state,
                    items: state.items.map((item, index) => {
                        if (index === payload.index) {
                            return {
                                ...item,
                                [payload.target.name]: (type === "number" ? +payload.target.value : payload.target.value) || ""
                            }
                        }
                        return { ...item }
                    })
                };
            case "updateListItemObjectKeyOnInputBlur":
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