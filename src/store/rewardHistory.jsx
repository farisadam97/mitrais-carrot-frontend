import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
  isLoading: true,
  pagination: null,
};

const slice = createSlice({
  name: "rewardHistory",
  initialState,
  reducers: {
    resetRewardHistory: (rewardHistory, action) => {
      rewardHistory.lists = [];
      rewardHistory.isLoading = false;
      rewardHistory.error = null;
      rewardHistory.pagination = null;
    },
    apiRewardHistoryRequestSucceeded: (rewardHistory, action) => {
      rewardHistory.lists = action.payload.lists;
      rewardHistory.isLoading = false;
      rewardHistory.error = null;
      rewardHistory.pagination = action.payload.pagination;
      
    },
    apiRewardHistoryRequestFailed: (rewardHistory, action) => {
      rewardHistory.error = action.payload.error;
      rewardHistory.isLoading = false;
      rewardHistory.lists = [];
      rewardHistory.pagination = null;
    },
  },
});

export const { resetRewardHistory, apiRewardHistoryRequestSucceeded, apiRewardHistoryRequestFailed } =
  slice.actions;

export default slice.reducer;
