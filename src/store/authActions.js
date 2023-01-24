import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk('signupuser', async ({ email, password, apiKey}, thunkAPI) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0yIL4vmMCZsgxio1aX_IkxlvLNYsyEpU`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        console.log("data", data)
       
        if (response.status === 200) {
            localStorage.setItem("token", data.idToken)
            return data;
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    }catch (e) {
        console.log("Error", e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
    }

})



export const loginUser = createAsyncThunk(
    "users/login",
    async ({ email, password, apiKey }, thunkAPI) => {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0yIL4vmMCZsgxio1aX_IkxlvLNYsyEpU`,
          {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let data = await response.json()
        console.log("response", data)
        if (response.status === 200) {
          localStorage.setItem("token", data.idToken)
          return data
        } else {
          return thunkAPI.rejectWithValue(data)
        }
      } catch (e) {
        console.log("Error", e.response.data)
        thunkAPI.rejectWithValue(e.response.data)
      }
    }
  )