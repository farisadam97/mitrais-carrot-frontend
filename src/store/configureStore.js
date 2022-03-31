import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import FetchBazaarItem from './middleware/FetchBazaarItem';
import FetchTransaction from './middleware/FetchTransaction';
import FetchRecentBirthday from "./middleware/FetchRecentBirthday";
import FetchSharedHistory from "./middleware/FetchSharedHistory";
import FetchUsersList from "./middleware/FetchUsersList";

const api = [FetchBazaarItem, FetchTransaction, FetchSharedHistory, FetchRecentBirthday, FetchUsersList,];

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api),
  });
}
