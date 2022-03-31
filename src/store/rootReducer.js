import { combineReducers } from "redux";
import bazaarItemReducer from "./bazaarItem";
import transactionReducer from "./transaction";
import historyTrxReducer from "./historyTransaction";
import recentBirthdayReducer from "./recentBirthday";
import usersList from "./usersList";

export default combineReducers({
    bazaarItem: bazaarItemReducer,
    transaction: transactionReducer,
    history: historyTrxReducer,
    RecentBirthdayItem: recentBirthdayReducer,
    user: usersList,
})