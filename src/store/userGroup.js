import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    groups:[],
    groupsPagination: null,
    groupDetails: null,
    groupStaff: [],
    staffPagination: null,
}

const slice = createSlice({
    name: "Group",
    initialState,
    reducers: {
        fetchGroupSuccess: (state = initialState, action) => {
            state.groups = action.payload.groups;
            state.groupsPagination = action.payload.pagination;
        },
        fetchGroupDetailSuccess: (state = initialState, action) => {
            state.groupDetails = action.payload.groupDetails;
        },
        fetchGroupStaff: (state = initialState, action) => {
            state.groupStaff = action.payload.groupStaff;
            state.staffPagination = action.payload.pagination;
        }
    }
});

export const {
    fetchGroupSuccess,
    fetchGroupDetailSuccess,
    fetchGroupStaff,
} = slice.actions;

export default slice.reducer;