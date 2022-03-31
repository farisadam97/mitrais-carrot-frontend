import { combineReducers } from "redux";
import bazaarItemReducer from "./bazaarItem";
import transactionReducer from "./transaction";

export default combineReducers({
    bazaarItem: bazaarItemReducer,
    transaction: transactionReducer,
})