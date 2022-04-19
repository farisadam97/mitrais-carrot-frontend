import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
    error: null,
    isLoading: true,
    pagination: null,
}

const slice = createSlice({
    name: "annualCarrot",
    initialState,
    reducers: {
        FetchAnnualCarrotSuccess: (annualCarrot, action) => {
            annualCarrot.lists = action.payload.lists;
            annualCarrot.isLoading = false;
            annualCarrot.error = null;
            annualCarrot.pagination = action.payload.pagination;
        },
        FetchAnnualCarrotFailed: (annualCarrot, action) => {
            annualCarrot.error = action.payload.error;
            annualCarrot.isLoading = false;
            annualCarrot.lists = [];
            annualCarrot.pagination = null;
        }
    }
});

export const {
    FetchAnnualCarrotSuccess,
    FetchAnnualCarrotFailed,
} = slice.actions;

export default slice.reducer;