import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
    error: null,
    isLoading: true,
    pagination: null,
}

const slice = createSlice({
    name: "harvestList",
    initialState,
    reducers: {
        FetchHarvestListSuccess: (harvestList, action) => {
            harvestList.lists = action.payload.lists;
            harvestList.isLoading = false;
            harvestList.error = null;
            harvestList.pagination = action.payload.pagination;
        },
        FetchHarvestListFailed: (harvestList, action) => {
            harvestList.error = action.payload.error;
            harvestList.isLoading = false;
            harvestList.lists = [];
            harvestList.pagination = null;
        }
    }
});

export const {
    FetchHarvestListSuccess,
    FetchHarvestListFailed,
} = slice.actions;

export default slice.reducer;