import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    annualCarrotMinimum: null,
    carrotBirthDayShare: null,
    initialCarrot: null,
}

const slice = createSlice({
    name: "carrot setting",
    initialState,
    reducers: {
        fetchSettingsSuccess: (state = initialState, action) => {
            state.annualCarrotMinimum = action.payload.annualCarrotMinimum;
            state.carrotBirthDayShare = action.payload.carrotBirthDayShare;
            state.initialCarrot = action.payload.initialCarrot;
        },
        fetchUpdateSetting: (state = initialState, action) =>{
            state.annualCarrotMinimum = action.payload.annualCarrotMinimum;
            state.carrotBirthDayShare = action.payload.carrotBirthDayShare;
            state.initialCarrot = action.payload.initialCarrot;
        }
    }
});

export const{
    fetchSettingsSuccess,
    fetchUpdateSetting,
} = slice.actions;

export default slice.reducer;