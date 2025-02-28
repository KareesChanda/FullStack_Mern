/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        signInStart: (state) =>{
            state.loading = true;
        },
        signInSuccess: (state, action) =>{
            state.loading = false;
            state.currentUser = action.payload;
            state.error= null
        },
        signInFailure: (state, action) =>{
            state.loading= false;
            state.error = action.payload;
            
        }
    }
});

export const { singInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;