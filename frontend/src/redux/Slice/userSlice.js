import {createSlice} from "@reduxjs/toolkit"


export const loginSlice = createSlice({
    name:'loginUser',
    initialState:{
        currentUser: "",
        isLoading: false,
        isAuthenticated : false,
        error:""
    },
    reducers:{
        loginRequest: (state) => {
            state.isLoading = true
            state.isAuthenticated = false
        },
        loginSuccess: (state, action) =>{
            state.currentUser = action.payload
            state.isLoading = false
            state.isAuthenticated = true
   
        },
        loginFailure:(state, action) => {
            state.currentUser = null
            state.isLoading = false
            state.isAuthenticated = false
            state.error = action.payload
        },
        clearError:(state) =>{
            state.error = ""
        }
    },

})

export const registerSlice = createSlice({
    name:'registerUser',
    initialState:{
        currentUser : {},
        isLoading: false,
        isAuthenticated: false,
        error: "",
    },
    reducers:{
        registerRequest:(state)=>{
            state.isLoading = true
            state.isAuthenticated = false
        },
        registerSuccess:(state, action)=>{
            state.currentUser = action.payload
            state.isLoading = false
            state.isAuthenticated = true
        },
        registerFailure:(state, action)=>{
            state.currentUser = null
            state.isLoading = false
            state.isAuthenticated = false
            state.error = action.payload
        },
    }

})