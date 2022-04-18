import { combineReducers } from "redux";
import userBasketReducer from "./staffSummary";

export default combineReducers({
    userBasket: userBasketReducer
})