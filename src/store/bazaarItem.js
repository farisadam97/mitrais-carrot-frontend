import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: null,
    error: null,
    isLoading: true,
}

const slice = createSlice({
    name: "bazaar items",
    initialState,
    reducers: {
        fetchBazaarItemSuccess: (state, action) => {
            state.items = action.payload.items;
            state.isLoading = false;
            state.error = null;
        },
        fetchBazaarItemFailed: (state, action) => {
            state.items = [];
            state.error = action.payload.error;
            state.isLoading = false;
        }
    }
});

export const {
    fetchBazaarItemSuccess,
    fetchBazaarItemFailed
} = slice.actions;

export default slice.reducer;