import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    spentCarrot: 0,
    status: null,
    transactionId: null
}

const slice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        fetchTransactionSuccess: (state = initialState, action) => {
            state.spentCarrot = action.payload.transaction.totalCarrotSpent;
            state.status = action.payload.transaction.status;
            state.transactionId = action.payload.transaction.id;
        }
    }
})

export const {
    fetchTransactionSuccess,
} = slice.actions;

export default slice.reducer;