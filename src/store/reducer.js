import { combineReducers } from "redux";
import historyTrxReducer from "./historyTransaction";
import bazaarItemReducer from "./bazaarItem";
import recentBirthdayReducer from "./recentBirthday";
import usersList from "./usersList";
import managerList from "./admin/managerList";
import carrotStaff from "./admin/carrotStaff";

const reducer = combineReducers({
  bazaarItem: bazaarItemReducer,
  history: historyTrxReducer,
  RecentBirthdayItem: recentBirthdayReducer,
  user: usersList,
  managerList: managerList,
  carrotStaff : carrotStaff
});

export default reducer;
