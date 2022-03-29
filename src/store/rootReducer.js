import { combineReducers } from "redux";
import bazaarItemReducer from "./bazaarItem";

export default combineReducers({
    bazaarItem: bazaarItemReducer
})