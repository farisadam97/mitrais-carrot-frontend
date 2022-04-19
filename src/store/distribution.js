import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    error: null,
    isLoading: true,
    pagination: null,
};

const slice = createSlice({
    name: "Distribution Carrot",
    initialState,
    reducers: {
        apiDistSuccess: (state = initialState, action) => {
            state.list = action.payload.distribution;
            state.error = null;
            state.isLoading = false;
            state.pagination = action.payload.pagination;
        },
        apiDistFailed: (state = initialState, action) => {
            state.list = [];
            state.error = action.payload.error;
            state.isLoading = false;
            state.pagination = null;
        },
    },
});

export const {
    apiDistFailed,
    apiDistSuccess
} = slice.actions;

export default slice.reducer;