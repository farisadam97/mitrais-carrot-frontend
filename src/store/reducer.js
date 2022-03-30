import { combineReducers } from "redux";
import historyTrxReducer from "./historyTransaction";
import bazaarItemReducer from "./bazaarItem";
import recentBirthdayReducer from "./recentBirthday";

const reducer = combineReducers({
  bazaarItem: bazaarItemReducer,
  history: historyTrxReducer,
  RecentBirthdayItem: recentBirthdayReducer,
});

export default reducer;
