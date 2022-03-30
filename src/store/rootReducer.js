import { combineReducers } from "redux";
import bazaarItemReducer from "./bazaarItem";
import FetchTransaction from "./middleware/FetchTransaction";

export default combineReducers({
    bazaarItem: bazaarItemReducer,
    transaction: FetchTransaction,
})