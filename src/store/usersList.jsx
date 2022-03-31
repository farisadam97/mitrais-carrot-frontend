import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  error: null,
  isLoading: true,
  pagination: null,
};

const slice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    apiUsersListRequestSuccess: (usersList, action) => {
      usersList.lists = action.payload.lists;
      usersList.isLoading = false;
      usersList.error = null;
      usersList.pagination = action.payload.pagination;
    },
    apiUsersListRequestFailed: (usersList, action) => {
      usersList.error = action.payload.error;
      usersList.isLoading = false;
      usersList.lists = [];
      usersList.pagination = null;
    },
  },
});

export const { apiUsersListRequestSuccess, apiUsersListRequestFailed } =
  slice.actions;

export default slice.reducer;
