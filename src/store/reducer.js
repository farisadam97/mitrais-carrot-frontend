import { combineReducers } from "redux";
import historyTrxReducer from "./historyTransaction";
import bazaarItemReducer from "./bazaarItem";
import recentBirthdayReducer from "./recentBirthday";
import usersList from "./usersList";

const reducer = combineReducers({
  bazaarItem: bazaarItemReducer,
  history: historyTrxReducer,
  RecentBirthdayItem: recentBirthdayReducer,
  user: usersList,
});

export default reducer;
