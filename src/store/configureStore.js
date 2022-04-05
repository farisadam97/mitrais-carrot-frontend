import { configureStore } from "@reduxjs/toolkit";
import FetchManagerList from "./admin/middleware_admin/FetchManagerList";
import FetchBazaarItem from "./middleware/FetchBazaarItem";
import FetchRecentBirthday from "./middleware/FetchRecentBirthday";
import FetchSharedHistory from "./middleware/FetchSharedHistory";
import FetchUsersList from "./middleware/FetchUsersList";
import reducer from "./reducer";

const api = [
  FetchBazaarItem,
  FetchSharedHistory,
  FetchRecentBirthday,
  FetchUsersList,
  FetchManagerList,
];

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api),
  });
}
