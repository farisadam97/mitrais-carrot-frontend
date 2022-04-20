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
import annualCarrot from "./rootadmin/annualCarrot";
import activeUser from "./activeUser";
import annualBasket from "./rootadmin/annualBasket";
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
  annualCarrot : annualCarrot,
  activeUser: activeUser,
  annualBasket: annualBasket,
  distribution: distribution,
});
