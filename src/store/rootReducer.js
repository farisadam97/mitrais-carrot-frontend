import { combineReducers } from "redux";
import bazaarItemReducer from "./bazaarItem";
import transactionReducer from "./transaction";
import historyTrxReducer from "./historyTransaction";
import recentBirthdayReducer from "./recentBirthday";
import usersList from "./usersList";
import carrotSettings from "./carrotSettings";
import groupReducer from "./userGroup";
import basketHistoryReducer from "./basketHistory";
import donationHistoryReducer from "./donationHistory";
import rewardHistoryReducer from "./rewardHistory";
import managerList from "./admin/managerList";
import carrotStaff from "./admin/carrotStaff";
import harvestList from "./rootadmin/harvest";
import activeUser from "./activeUser";
import distribution from "./distribution";

export default combineReducers({
  bazaarItem: bazaarItemReducer,
  transaction: transactionReducer,
  history: historyTrxReducer,
  RecentBirthdayItem: recentBirthdayReducer,
  user: usersList,
  basketItem: basketHistoryReducer,
  donationHistory: donationHistoryReducer,
  rewardHistory: rewardHistoryReducer,
  setting: carrotSettings,
  group: groupReducer,
  managerList: managerList,
  carrotStaff : carrotStaff,
  harvestList : harvestList,
  activeUser: activeUser,
  distribution: distribution,
});
