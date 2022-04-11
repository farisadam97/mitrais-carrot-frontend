import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
  isLoading: true,
};

const slice = createSlice({
  name: "basketHistory",
  initialState,
  reducers: {
    apiBasketHistoryRequestSucceeded: (basketHistory, action) => {
      basketHistory.lists = action.payload.lists;
      basketHistory.isLoading = false;
      basketHistory.error = null;
    },
    apiBasketHistoryRequestFailed: (basketHistory, action) => {
      basketHistory.error = action.payload.error;
      basketHistory.isLoading = false;
      basketHistory.lists = [];
    },
  },
});

export const { apiBasketHistoryRequestSucceeded, apiBasketHistoryRequestFailed } =
  slice.actions;

export default slice.reducer;
