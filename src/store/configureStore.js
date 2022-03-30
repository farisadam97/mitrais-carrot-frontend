import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import FetchBazaarItem from './middleware/FetchBazaarItem';
import FetchTransaction from './middleware/FetchTransaction';
import FetchRecentBirthday from "./middleware/FetchRecentBirthday";
import FetchSharedHistory from "./middleware/FetchSharedHistory";

const api = [FetchBazaarItem, FetchTransaction, FetchSharedHistory, FetchRecentBirthday];

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api),
  });
}
