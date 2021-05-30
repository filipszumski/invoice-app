import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { status } from "./status/status";
import { invoices } from "./invoices/invoices";

const rootReducer = combineReducers({
    status,
    invoices,
})

export default createStore(rootReducer, composeWithDevTools());