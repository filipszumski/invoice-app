import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import initialStore from "./initialStore";

export default createStore(() => initialStore, composeWithDevTools());