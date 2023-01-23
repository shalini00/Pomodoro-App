import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser } from "./authActions";


const initialState = {
    token: null,
    email: "",
    isLoggedIn: false,
    isFetching: false,
    isSignedUp: false,
    isError: false,
    errorMessage: "",
}


export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       logout: (state) => {
        
        state.token = null;
        state.isSuccess = false;
        state.isLoggedIn = false;
        state.isError = false;
        localStorage.removeItem("token")
       },
       authHandler: (state) => {
          state.isLoggedIn = true;
       }

    },
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSignedUp = true;
            state.email = payload.email;
            state.token = payload.idToken;
            return state;
           
          },
          [signupUser.pending]: (state,{ payload }) => {
            state.isFetching = true;
            
          },
          [signupUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.error.message;
          },

          // login

          [loginUser.fulfilled]: (state, { payload }) => {
            state.email = payload.email;
            state.token = payload.idToken;
            state.isFetching = false;
            state.isLoggedIn = true;
            return state;
          },
          [loginUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.error.message;
            console.log(state.errorMessage)
          },
          [loginUser.pending]: (state) => {
            state.isFetching = true;
          },
    },
})

export const {logout, authHandler} = authSlice.actions;

export default authSlice.reducer;