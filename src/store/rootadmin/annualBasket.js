import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists: [],
    error: null,
    isLoading: true,
    pagination: null,
}

const slice = createSlice({
    name: "annualBasket",
    initialState,
    reducers: {
        FetchAnnualBasketSuccess: (annualBasket, action) => {
            annualBasket.lists = action.payload.lists;
            annualBasket.isLoading = false;
            annualBasket.error = null;
            annualBasket.pagination = action.payload.pagination;
        },
        FetchAnnualBasketFailed: (annualBasket, action) => {
            annualBasket.error = action.payload.error;
            annualBasket.isLoading = false;
            annualBasket.lists = [];
            annualBasket.pagination = null;
        }
    }
});

export const {
    FetchAnnualBasketSuccess,
    FetchAnnualBasketFailed,
} = slice.actions;

export default slice.reducer;