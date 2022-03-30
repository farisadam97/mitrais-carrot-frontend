import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
  isLoading: true,
};

const slice = createSlice({
  name: "historyTransaction",
  initialState,
  reducers: {
    apiHistoryTrxRequestSucceeded: (historyTransaction, action) => {
      historyTransaction.lists = action.payload.lists;
      historyTransaction.isLoading = false;
      historyTransaction.error = null;
    },
    apiHistoryTrxRequestFailed: (historyTransaction, action) => {
      historyTransaction.error = action.payload.error;
      historyTransaction.isLoading = false;
      historyTransaction.lists = [];
    },
  },
});

export const { apiHistoryTrxRequestSucceeded, apiHistoryTrxRequestFailed } =
  slice.actions;

export default slice.reducer;
