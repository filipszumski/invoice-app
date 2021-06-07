const SET_STATUS = "SET_STATUS";
const GET_DATA_ACTIVE = "GET_DATA_ACTIVE";
const DISPLAY_FORM = "DISPLAY_FORM";
const DISPLAY_ALERT = "DISPLAY_ALERT";

export const setStatus = (payload) => {
    return {
        type: SET_STATUS,
        payload: payload
    }
};

export const getDataActive = (payload) => {
    return {
        type: GET_DATA_ACTIVE,
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

const initialStatus = {
    stage: "loading",
    getDataActive: true,
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
        case GET_DATA_ACTIVE:
            return {
                ...state,
                getDataActive: action.payload,
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
        default:
            return state;
    }

}