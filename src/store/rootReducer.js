import { combineReducers } from "redux";
import bazaarItemReducer from "./bazaarItem";
import transactionReducer from "./transaction";
import historyTrxReducer from "./historyTransaction";
import recentBirthdayReducer from "./recentBirthday";
import usersList from "./usersList";
import carrotSettings from "./carrotSettings";
import groupReducer from "./userGroup";

export default combineReducers({
    bazaarItem: bazaarItemReducer,
    transaction: transactionReducer,
    history: historyTrxReducer,
    RecentBirthdayItem: recentBirthdayReducer,
    user: usersList,
    setting: carrotSettings,
    group: groupReducer,
})