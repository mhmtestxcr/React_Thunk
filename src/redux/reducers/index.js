import countReducer from "./countReducer";
import { combineReducers } from "redux"
import todoReducer from "./todoReducer";

const reducers = combineReducers({
    count:countReducer,
    todos:todoReducer,
})

export default reducers;