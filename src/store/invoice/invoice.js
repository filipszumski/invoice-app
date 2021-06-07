const GET_INVOICE_DATA_SUCCESS = "GET_INVOICE_DATA_SUCCESS";

export const getInvoiceDataSuccess = (invoice) => {
    return {
        type: GET_INVOICE_DATA_SUCCESS,
        payload: invoice,
    }
};

const initialInvoices = {};

export const invoice = (state = initialInvoices, action) => {
    switch (action.type) {
        case GET_INVOICE_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};