import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { status } from "./status/status";
import { invoices } from "./invoices/invoices";
import { invoice } from "./invoice/invoice";

const rootReducer = combineReducers({
    status,
    invoices,
    invoice,
})

export default createStore(rootReducer, composeWithDevTools());