import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manager: null,
    error: null,
}

const slice = createSlice({
    name: "managerList",
    initialState,
    reducers: {
        fetchManagerListSuccess: (state = initialState, action) => {
            state.manager = action.payload.items;
            state.error = null;
        },
        fetchFailed: (state, action) => {
            state.manager = [];
            state.error = action.payload.error;
        }
    }
});

export const {
    fetchManagerListSuccess,
    fetchFailed,
} = slice.actions;

export default slice.reducer;