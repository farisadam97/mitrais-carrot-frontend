import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: null,
    error: null,
    detailItem: null,
}

const slice = createSlice({
    name: "bazaar items",
    initialState,
    reducers: {
        fetchBazaarItemSuccess: (state = initialState, action) => {
            state.items = action.payload.items;
            state.error = null;
        },
        fetchDetailItemSuccess: (state = initialState, action) => {
            state.detailItem = action.payload.detailItem;
            state.error = null;
        },
        fetchFailed: (state, action) => {
            state.items = [];
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