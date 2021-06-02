const SET_STATUS = "SET_STATUS";
const DISPLAY_FORM = "DISPLAY_FORM";

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

const initialStatus = {
    status: "loading",
    overlayActive: false,
    formActive: false,
    deleteInvoiceActive: false,
};


export const status = (state = initialStatus, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case DISPLAY_FORM:
            return {
                ...state,
                formActive: action.payload,
                overlayActive: action.payload,
            };
        default:
            return state;
    }

}