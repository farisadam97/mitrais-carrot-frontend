import { configureStore } from "@reduxjs/toolkit";
import FetchCarrotStaff from "./admin/middleware_admin/FetchCarrotStaff";
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
  FetchCarrotStaff
];

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api),
  });
}
