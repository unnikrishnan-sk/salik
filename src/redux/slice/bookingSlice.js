import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookingFormData: []
}

export const bookingSlice = createSlice({
    name: 'bookingForm',
    initialState,
    reducers: {
        addbookingData: (state, action) => {
            state.bookingFormData = [action.payload, ...state.bookingFormData]
        }
    },
})

export const { addbookingData } = bookingSlice.actions;
export default bookingSlice.reducer;