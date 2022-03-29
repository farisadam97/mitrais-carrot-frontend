import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
};

const slice = createSlice({
  name: "historyTransaction",
  initialState: initialState,
  reducers: {
    apiHistoryTrxRequestSucceeded: (historyTransaction, action) => {
      historyTransaction.lists = action.payload.lists;
    },
    apiHistoryTrxRequestFailed: (historyTransaction, action) => {
      historyTransaction.error = action.payload.message;
    },
  },
});

export const { apiHistoryTrxRequestSucceeded, apiHistoryTrxRequestFailed } =
  slice.actions;
export default slice.reducer;

// selectors
export const getHistoryTrx = (state) => {
  console.log(state.history.lists);
  return state.history.lists;
};
