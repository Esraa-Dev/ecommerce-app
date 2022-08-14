import { createStore } from "redux";
import rootReducers from "./reducer";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(rootReducers, enhancer());

export default store;