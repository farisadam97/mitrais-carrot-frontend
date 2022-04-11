import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
  isLoading: true,
  pagination: null,
};

const slice = createSlice({
  name: "donationHistory",
  initialState,
  reducers: {
    resetDonationHistory: (donationHistory) => {
      donationHistory.lists = [];
      donationHistory.isLoading = false;
      donationHistory.error = null;
      donationHistory.pagination = null;
    },

    apiDonationHistoryRequestSucceeded: (donationHistory, action) => {
      donationHistory.lists = action.payload.lists;
      donationHistory.isLoading = false;
      donationHistory.error = null;
      donationHistory.pagination = action.payload.pagination;
      
    },

    apiDonationHistoryRequestFailed: (donationHistory, action) => {
      donationHistory.error = action.payload.error;
      donationHistory.isLoading = false;
      donationHistory.lists = [];
      donationHistory.pagination = null;
    },
  },
});

export const { resetDonationHistory, apiDonationHistoryRequestSucceeded, apiDonationHistoryRequestFailed } =
  slice.actions;

export default slice.reducer;
