const GET_INVOICES_DATA_SUCCESS = "GET_INVOICES_DATA_SUCCESS";

export const getInvoicesDataSuccess = (invoices) => {
    return {
        type: GET_INVOICES_DATA_SUCCESS,
        payload: invoices
    }
};

const initialInvoices = [];

export const invoices = (state = initialInvoices, action) => {
    switch (action.type) {
        case GET_INVOICES_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};