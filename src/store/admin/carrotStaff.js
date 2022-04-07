import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
    error: null,
    isLoading: true,
    pagination: null,
}

const slice = createSlice({
    name: "carrotStaff",
    initialState,
    reducers: {
        fetchCarrotStaffSuccess: (carrotStaff, action) => {
            carrotStaff.lists = action.payload.lists;
            carrotStaff.isLoading = false;
            carrotStaff.error = null;
            carrotStaff.pagination = action.payload.pagination;
        },
        fetchCarrotStaffFailed: (carrotStaff, action) => {
            carrotStaff.error = action.payload.error;
            carrotStaff.isLoading = false;
            carrotStaff.lists = [];
            carrotStaff.pagination = null;
        }
    }
});

export const {
    fetchCarrotStaffSuccess,
    fetchCarrotStaffFailed,
} = slice.actions;

export default slice.reducer;