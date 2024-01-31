import { legacy_createStore as createStore, combineReducers } from "redux";
import marketReducer from "./marketReducer";

const rootReducer = combineReducers({
    posts: marketReducer
})

export  const store = createStore(rootReducer)