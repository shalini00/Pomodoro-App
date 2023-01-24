import { createSlice } from "@reduxjs/toolkit";
import { addTasks } from "./taskActions";
import { getTasks } from "./taskActions";

const initialState = {
    pomodoroMin: 25,
    shortBreakMin: 5,
    longBreakMin: 15,
    isTaskAdded: false,
    isError: false,
    tasks: [],
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
    },
    extraReducers: {
        [addTasks.fulfilled]: (state, { payload }) => {
            state.isTaskAdded = true;
            // console.log('payload', payload)
            return state;
           
          },
          [addTasks.pending]: (state,{ payload }) => {
            state.isTaskAdded = false;
            
          },
          [addTasks.rejected]: (state, { payload }) => {
            // console.log('payload', payload);
            state.isError = true;
            
          },

          
          
          //Getting Tasks 

          [getTasks.fulfilled]: (state, { payload }) => {
            state.tasks = payload.taskData;
            // console.log('payload', payload)
            return state;
           
          },
        //   [getTasks.pending]: (state,{ payload }) => {
        //     return state;
            
        //   },
          [getTasks.rejected]: (state, { payload }) => {
            // console.log('payload', payload);
            state.isError = true;
            
          },
    }
})


export const timerActions = timerSlice.actions;

export default timerSlice.reducer