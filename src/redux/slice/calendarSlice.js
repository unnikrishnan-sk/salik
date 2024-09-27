import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    calendarData: []
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addcalendarData: (state, action) => {
            state.calendarData = [action.payload, ...state.calendarData]
        }
    },
})

export const { addcalendarData } = calendarSlice.actions;
export default calendarSlice.reducer;