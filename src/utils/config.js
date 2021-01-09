/**
 * Created by Max on 2020-06-24.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import reducer from "../reducer/reducer";

const logger = createLogger();
let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(reducer, applyMiddleware(thunk, logger));
} else {
  store = createStore(reducer, applyMiddleware(thunk));
}

export default function getStore() {
  return store;
}
