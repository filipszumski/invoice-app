const SET_STATUS = "SET_STATUS";
const DISPLAY_FORM = "DISPLAY_FORM";
const DISPLAY_ALERT = "DISPLAY_ALERT";
const GET_INVOICES_ACTIVE = "GET_INVOICES_ACTIVE";

export const setStatus = (payload) => {
    return {
        type: SET_STATUS,
        payload: payload
    }
};

export const displayForm = (payload) => {
    return {
        type: DISPLAY_FORM,
        payload: payload
    }
};

export const displayDeleteInvoiceAlert = (payload) => {
    return {
        type: DISPLAY_ALERT,
        payload: payload
    }
};

export const getInvoicesActive = (payload) => {
    return {
        type: GET_INVOICES_ACTIVE,
        payload: payload
    }
};

const initialStatus = {
    stage: "loading",
    getInvoicesActive: true,
    overlayActive: false,
    formActive: false,
    deleteInvoiceActive: false,
};


export const status = (state = initialStatus, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                stage: action.payload,
            };
        case DISPLAY_FORM:
            return {
                ...state,
                formActive: action.payload,
                overlayActive: action.payload,
            };
        case DISPLAY_ALERT:
            return {
                ...state,
                deleteInvoiceActive: action.payload,
                overlayActive: action.payload,
            };
        case GET_INVOICES_ACTIVE:
            return {
                ...state,
                getInvoicesActive: action.payload,
            };
        default:
            return state;
    }

}