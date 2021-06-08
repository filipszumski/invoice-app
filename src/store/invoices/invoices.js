const GET_INVOICES_DATA_SUCCESS = "GET_INVOICES_DATA_SUCCESS";
const ADD_INVOICE_DATA_SUCCESS = "ADD_INVOICE_DATA_SUCCESS";
const REMOVE_INVOICE_DATA_SUCCESS = "REMOVE_INVOICE_DATA_SUCCESS";

export const getInvoicesDataSuccess = (invoices) => {
    return {
        type: GET_INVOICES_DATA_SUCCESS,
        payload: invoices
    }
};

export const addInvoiceDataSuccess = (invoices) => {
    return {
        type: ADD_INVOICE_DATA_SUCCESS,
        payload: invoices
    }
};

export const removeInvoiceDataSuccess = (id) => {
    return {
        type: REMOVE_INVOICE_DATA_SUCCESS,
        payload: id
    }
};

const initialInvoices = [];

export const invoices = (state = initialInvoices, action) => {
    switch (action.type) {
        case GET_INVOICES_DATA_SUCCESS:
            return action.payload;
        case ADD_INVOICE_DATA_SUCCESS:
            return [
                ...state,
                action.payload,
            ];
        case REMOVE_INVOICE_DATA_SUCCESS:
            return state.filter(invoice => invoice.id !== action.payload);
        default:
            return state;
    }
};