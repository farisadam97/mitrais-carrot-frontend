import { configureStore } from "@reduxjs/toolkit";
import FetchBazaarItem from "./middleware/FetchBazaarItem";
import FetchRecentBirthday from "./middleware/FetchRecentBirthday";
import FetchSharedHistory from "./middleware/FetchSharedHistory";
import reducer from "./reducer";

const api = [FetchBazaarItem, FetchSharedHistory, FetchRecentBirthday];

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api),
  });
}
