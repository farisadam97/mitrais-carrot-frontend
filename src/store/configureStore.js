import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import FetchBazaarItem from "./middleware/FetchBazaarItem";
import FetchTransaction from "./middleware/FetchTransaction";
import FetchRecentBirthday from "./middleware/FetchRecentBirthday";
import FetchSharedHistory from "./middleware/FetchSharedHistory";
import FetchUsersList from "./middleware/FetchUsersList";
import FetchBasketHistory from "./middleware/FetchBasketHistory";
import FetchDonationHistory from "./middleware/FetchDonationHistory";
import FetchRewardHistory from "./middleware/FetchRewardHistory";

const api = [
  FetchBazaarItem,
  FetchTransaction,
  FetchSharedHistory,
  FetchRecentBirthday,
  FetchUsersList,
  FetchBasketHistory,
  FetchDonationHistory,
  FetchRewardHistory,
];

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api),
  });
}
