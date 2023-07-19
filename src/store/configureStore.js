import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {devToolsEnhancer} from "redux-devtools-extension"
import reducer from "./tasks";

export const store = createStore(
  reducer,
  devToolsEnhancer({trace:true})
);
