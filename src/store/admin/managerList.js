import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
    error: null,
    isLoading: true,
    pagination: null,
}

const slice = createSlice({
    name: "managerList",
    initialState,
    reducers: {
        fetchManagerListSuccess: (managerList, action) => {
            managerList.lists = action.payload.lists;
            managerList.isLoading = false;
            managerList.error = null;
            managerList.pagination = action.payload.pagination;
        },
        fetchManagerListFailed: (managerList, action) => {
            managerList.error = action.payload.error;
            managerList.isLoading = false;
            managerList.lists = [];
            managerList.pagination = null;
        }
    }
});

export const {
    fetchManagerListSuccess,
    fetchManagerListFailed,
} = slice.actions;

export default slice.reducer;