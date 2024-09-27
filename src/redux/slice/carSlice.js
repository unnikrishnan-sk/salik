import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    car: []
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        addcar: (state, action) => {
            state.car = action.payload
        }
    },
})

export const { addcar } = carSlice.actions;
export default carSlice.reducer;