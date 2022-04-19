import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    groups:[],
    groupsPagination: null,
    groupDetails: null,
    groupStaff: [],
    staffPagination: null,
    isLoading: true,
    error: null,
}

const slice = createSlice({
    name: "Group",
    initialState,
    reducers: {
        fetchGroupSuccess: (state = initialState, action) => {
            state.isLoading = false;
            state.groups = action.payload.groups;
            state.groupsPagination = action.payload.pagination;
            state.error = null;
        },
        fetchGroupDetailSuccess: (state = initialState, action) => {
            state.isLoading = false;
            state.groupDetails = action.payload.groupDetails;
            state.error = null;
        },
        fetchGroupStaff: (state = initialState, action) => {
            state.isLoading = false;
            state.groupStaff = action.payload.groupStaff;
            state.staffPagination = action.payload.pagination;
            state.error = null;
        },
        fetchGroupFailed: (state = initialState, action) => {
            state.isLoading = false;
            state.error = action.payload.error
        }
    }
});

export const {
    fetchGroupSuccess,
    fetchGroupDetailSuccess,
    fetchGroupStaff,
    fetchGroupFailed,
} = slice.actions;

export default slice.reducer;