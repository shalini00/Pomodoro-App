
import { createAsyncThunk } from "@reduxjs/toolkit";


const FIREBASE_DOMAIN = 'https://react-pomodoro-fd925-default-rtdb.firebaseio.com';


//For Adding tasks into database
export const addTasks = createAsyncThunk('addtasks', async ({ enteredTask, id }, thunkAPI) => {
    try {
        const response = await fetch(`${FIREBASE_DOMAIN}/tasks/${id}.json`, {
            method: 'POST',
            body: JSON.stringify(enteredTask),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        console.log("data", data)

        if (response.status === 200) {
            return {id:  data.name };
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    } catch (e) {
        console.log("Error", e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
    }

});


//getting tasks from db
export const getTasks = createAsyncThunk('gettasks', async ( id , thunkAPI) => {
    try {
        const response = await fetch(`${FIREBASE_DOMAIN}/tasks/${id}.json`)
        const data = await response.json();
        console.log("data", data)

        if (response.status === 200) {
            const transformedTasksData = [];

            for (const key in data) {
                const taskObj = {
                    id: key,
                    ...data[key],
                };

                transformedTasksData.push(taskObj);
            }

            console.log(transformedTasksData);
            return transformedTasksData;

        } else {
            return thunkAPI.rejectWithValue(data)
        }
    } catch (e) {
        console.log("Error", e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
    }

});







