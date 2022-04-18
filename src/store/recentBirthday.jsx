import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
  isLoading: true,
  pagination: null,
};

const slice = createSlice({
  name: "recentBirthday",
  initialState,
  reducers: {
    apiRecentBirthdayRequestSucceeded: (recentBirthday, action) => {
      recentBirthday.lists = action.payload.lists;
      recentBirthday.isLoading = false;
      recentBirthday.error = null;
      recentBirthday.pagination = action.payload.pagination;
    },
    apiRecentBirthdayRequestFailed: (recentBirthday, action) => {
      recentBirthday.error = action.payload.error;
      recentBirthday.isLoading = false;
      recentBirthday.lists = [];
      recentBirthday.pagination = null;
    },
  },
});

export const { apiRecentBirthdayRequestSucceeded, apiRecentBirthdayRequestFailed } =
  slice.actions;

export default slice.reducer;
