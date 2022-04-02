import { combineReducers } from "redux";
import historyTrxReducer from "./historyTransaction";
import bazaarItemReducer from "./bazaarItem";
import recentBirthdayReducer from "./recentBirthday";
import usersList from "./usersList";
import managerListReducer from "./admin/managerList";

const reducer = combineReducers({
  bazaarItem: bazaarItemReducer,
  history: historyTrxReducer,
  RecentBirthdayItem: recentBirthdayReducer,
  user: usersList,
  managerList: managerListReducer,
});

export default reducer;
