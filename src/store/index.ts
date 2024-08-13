import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers/index.ts";
import { thunk } from "redux-thunk";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));