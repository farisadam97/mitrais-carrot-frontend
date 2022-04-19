import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    error: null,
    isLoading: true,
    basket: {},
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
            state.basket = action.payload.basket;
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