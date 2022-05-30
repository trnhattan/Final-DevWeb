import {createSlice} from "@reduxjs/toolkit"
import {login, register, loadUser, logout} from  '../callAPI/userCall'

export const UserSlice = createSlice({
    name:'loginUser',
    initialState:{
        currentUser:{},
        isLoading: null,
        isAuthenticated : null,
        error: null,
    },
    reducers:{
    },
    extraReducers:{
        
        //LOGIN
        [login.pending] : (state)=>{
            state.isLoading = true
            state.error = false
        },
        [login.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.currentUser = action.payload
            state.isAuthenticated = true
            state.error = false
        },
        [login.rejected] : (state)=>{
            state.isLoading = false
            state.error = true
        },

        //REGISTER
        [register.pending] :(state)=>{
            state.isLoading = true
            state.error = false
        },
        [register.fulfilled] :(state,action)=>{
            state.isLoading = false
            state.currentUser = action.payload
            state.isAuthenticated = true
            state.error = false
        },
        [register.rejected] :(state)=>{
            state.isLoading = false
            state.error = true
        },

        //LOADUSER
        [loadUser.pending]:(state)=>{
            state.isLoading = true
            state.error = false
        },
        [loadUser.fulfilled]:(state, action)=>{
            state.isLoading = false
            state.currentUser = action.payload
            state.isAuthenticated = true
            state.error = false
        },
        [loadUser.rejected]:(state)=>{
            state.isLoading = false
            state.error = true
        },

        //LOGOUT
        [logout.pending]:(state)=>{
            state.isLoading = true
            state.error = false
        },
        [logout.fulfilled]:(state)=>{
            state.isLoading = false
            state.currentUser = null
            state.isAuthenticated = false
        },
        [logout.rejected]:(state)=>{
            state.isLoading = false
            state.error = true
        },

    },
})

