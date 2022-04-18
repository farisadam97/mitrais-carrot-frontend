import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: null,
    isLoading: true,
    error: null,
}

const slice = createSlice({
    name: "userBasket",
    initialState,
    reducers: {
        fetchUserWithBasketSuccess: (state, action) => {
            state.basket = action.payload.basket;
            state.isLoading = false;
            state.error = null;
        },
        fetchUserWithBasketFailed: (state, action) => {
            state.basket = [];
            state.error = action.payload.error;
            state.isLoading = false;
        }
    }
});

export const {
    fetchUserWithBasketSuccess,
    fetchUserWithBasketFailed
} = slice.actions;

export default slice.reducer;