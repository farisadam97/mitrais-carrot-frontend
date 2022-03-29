import rootReducer from "../reducer/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export default store;
