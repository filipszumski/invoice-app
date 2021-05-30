const GET_INVOICE_STATUS_SUCCESS = "GET_INVOICE_STATUS_SUCCESS";
const GET_INVOICE_STATUS_ERROR = "GET_INVOICE_STATUS_ERROR";

const initialStatus = {
    status: "loading",
    overlayActive: false,
    formActive: false,
    deleteInvoiceActive: false,
};

export const getInvoicesStatusSuccess = () => {
    return {
        type: GET_INVOICE_STATUS_SUCCESS,
    }
}

export const getInvoicesStatusError = () => {
    return {
        type: GET_INVOICE_STATUS_ERROR,
    }
}


export const status = (state = initialStatus, action) => {
    switch (action.type) {
        case GET_INVOICE_STATUS_SUCCESS:
            return {
                ...state,
                status: "success"
            };
        case GET_INVOICE_STATUS_ERROR:
            return {
                ...state,
                status: "error" 
            };
        default:
            return state;
    }

}