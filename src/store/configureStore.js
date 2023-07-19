import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./tasks";

export const store = createStore(reducer,applyMiddleware(thunk));
