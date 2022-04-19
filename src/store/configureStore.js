import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import FetchCarrotStaff from "./admin/middleware_admin/FetchCarrotStaff";
import FetchManagerList from "./admin/middleware_admin/FetchManagerList";
import FetchBazaarItem from "./middleware/FetchBazaarItem";
import FetchTransaction from "./middleware/FetchTransaction";
import FetchRecentBirthday from "./middleware/FetchRecentBirthday";
import FetchSharedHistory from "./middleware/FetchSharedHistory";
import FetchUsersList from "./middleware/FetchUsersList";
import FetchUser from "./middleware/FetchUser";
import FetchSetting from "./middleware/FetchSetting";
import FetchGroup from "./middleware/FetchGroup";
import FetchBasketHistory from "./middleware/FetchBasketHistory";
import FetchDonationHistory from "./middleware/FetchDonationHistory";
import FetchRewardHistory from "./middleware/FetchRewardHistory";
import FetchHarvest from "./rootadmin/middleware/FetchHarvest";
import FetchDistribution from "./middleware/FetchDistribution";

const api = [
  FetchBazaarItem,
  FetchTransaction,
  FetchSharedHistory,
  FetchRecentBirthday,
  FetchUsersList,
  FetchBasketHistory,
  FetchDonationHistory,
  FetchRewardHistory,
  FetchUser,
  FetchSetting,
  FetchGroup,
  FetchManagerList,
  FetchCarrotStaff,
  FetchHarvest,
  FetchDistribution,
];

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api),
  });
}
