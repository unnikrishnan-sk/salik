import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    locationData: []
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        addlocationData: (state, action) => {
            state.locationData = action.payload
        }
    },
})

export const { addlocationData } = locationSlice.actions;
export default locationSlice.reducer;