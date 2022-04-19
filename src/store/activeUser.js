import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    error: null,
    isLoading: true,
    basketAmount: 0,
};

const slice = createSlice({
    name: "activeUser",
    initialState,
    reducers:{
        apiUserRequestSuccess: (state = initialState, action) => {
            state.data = action.payload.data;
            state.isLoading = false;
            state.error = null;
        },
        apiUserRequestFailed: (state = initialState, action) => {
            state.error = action.payload.error;
            state.isLoading = false;
        },
        apiBasketRequestSuccess: (state = initialState, action) => {
            state.basketAmount = action.payload.basketAmount;
            state.isLoading = false;
            state.error = null;
        },
        apiBasketRequestFailed: (state = initialState, action) => {
            state.error = action.payload.error;
            state.isLoading = false;
        }
    },
});

export const { apiUserRequestSuccess, apiUserRequestFailed, apiBasketRequestFailed, apiBasketRequestSuccess } = slice.actions;

export default slice.reducer;