import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    branchData: []
}

export const branchSlice = createSlice({
    name: 'branch',
    initialState,
    reducers: {
        addbranchData: (state, action) => {
            state.branchData = action.payload
        }
    },
})

export const { addbranchData } = branchSlice.actions;
export default branchSlice.reducer;