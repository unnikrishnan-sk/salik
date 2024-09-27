import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginData: [],
    loggedIn: false,
    profileData: []
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loggedIn: (state) => {
            state.loggedIn = true
        },
        addloginData: (state, action) => {
            state.loginData = [action.payload, ...state.loginData]
        },
        addProfileData: (state, action) => {
            state.profileData = [action.payload, ...state.profileData]
        },
    },
})

export const { addloginData, loggedIn, addProfileData } = loginSlice.actions;
export default loginSlice.reducer;