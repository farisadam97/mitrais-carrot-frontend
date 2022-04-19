import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: null,
    error: null,
    detailItem: null,
    isLoading: true,
}

const slice = createSlice({
    name: "bazaar items",
    initialState,
    reducers: {
        fetchBazaarItemSuccess: (state = initialState, action) => {
            state.items = action.payload.items;
            state.error = null;
            state.isLoading = false;
        },
        fetchDetailItemSuccess: (state = initialState, action) => {
            state.detailItem = action.payload.detailItem;
            state.error = null;
            state.isLoading = false;
        },
        fetchFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
});

export const {
    fetchBazaarItemSuccess,
    fetchFailed,
    fetchDetailItemSuccess,
} = slice.actions;

export default slice.reducer;