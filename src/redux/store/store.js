import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slice/loginSlice.js'
import calendarReducer from '../slice/calendarSlice.js'
import bookingReducer from '../slice/bookingSlice.js'
import carReducer from '../slice/carSlice.js'
import pickupReducer from '../slice/PickupSlice.js'
import branchReducer from '../slice/branchSlice.js'
import locationReducer from '../slice/locationSlice.js'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        calendar: calendarReducer,
        booking: bookingReducer,
        car: carReducer,
        pickup: pickupReducer,
        branch: branchReducer,
        location: locationReducer
    },
});
