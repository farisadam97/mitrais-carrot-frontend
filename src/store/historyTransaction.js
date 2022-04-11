import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
  isLoading: true,
  pagination: null,
};

const slice = createSlice({
  name: "historyTransaction",
  initialState,
  reducers: {
    resetHistory: (historyTransaction, action) => {
      historyTransaction.lists = [];
      historyTransaction.isLoading = false;
      historyTransaction.error = null;
      historyTransaction.pagination = null;
    },
    apiHistoryTrxRequestSucceeded: (historyTransaction, action) => {
      historyTransaction.lists = action.payload.lists;
      historyTransaction.isLoading = false;
      historyTransaction.error = null;
      historyTransaction.pagination = action.payload.pagination;
    },
    apiHistoryTrxRequestFailed: (historyTransaction, action) => {
      historyTransaction.error = action.payload.error;
      historyTransaction.isLoading = false;
      historyTransaction.lists = [];
      historyTransaction.pagination = null;
    },
  },
});

export const {
  resetHistory,
  apiHistoryTrxRequestSucceeded,
  apiHistoryTrxRequestFailed,
} = slice.actions;

export default slice.reducer;
