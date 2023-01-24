import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import timerReducer from './timer-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        timer: timerReducer

    }
})

export default store;