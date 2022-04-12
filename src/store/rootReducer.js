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
});
