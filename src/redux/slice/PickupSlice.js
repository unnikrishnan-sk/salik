import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pickupType: ''
}

export const pickupSlice = createSlice({
    name: 'pickup',
    initialState,
    reducers: {
        addpickuptype: (state, action) => {
            state.pickupType = action.payload
        }
    },
})

export const { addpickuptype } = pickupSlice.actions;
export default pickupSlice.reducer;