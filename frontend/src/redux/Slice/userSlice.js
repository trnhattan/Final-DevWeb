import {createSlice} from "@reduxjs/toolkit"
import {login, register, loadUser, logout, updateProfile} from  '../callAPI/userCall'

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
        [login.rejected] : (state, action)=>{
            state.isLoading = false
            state.error = action.payload
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


export const ProfileSlice = createSlice({
    name:'profile',
    initialState:{
        isUpdated: null,
        isDeleted: null,
        isLoading: null,
        error: null,
    },
    reducers:{
        "updateProfileReset": (state) => {
            state.isUpdated = false
        },
    },
    extraReducers:{

        //UPDATE PROFILE
        [updateProfile.pending] : (state)=>{
            state.isLoading = true
            state.error = false
        },
        [updateProfile.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.isUpdated = action.payload
            state.error = false
        },
        [updateProfile.rejected] : (state)=>{
            state.isUpdated = false
            state.isLoading = false
            state.error = true
        },



    },
})
