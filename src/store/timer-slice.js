import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pomodoroMin: 0.1,
    shortBreakMin: 0.05,
    longBreakMin: 0.2
}


const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setPomodoroMin: (state, action) => {
            state.pomodoroMin = action.payload
        },
        setShortBreakMin: (state, action) => {
            state.shortBreakMin = action.payload
        },
        setLongBreakMin: (state, action) => {
            state.longBreakMin = action.payload
        },
    }
})


export const timerActions = timerSlice.actions;

export default timerSlice.reducer