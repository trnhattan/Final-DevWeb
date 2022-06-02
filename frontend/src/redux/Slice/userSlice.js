import {createSlice} from "@reduxjs/toolkit"
import {login, register, loadUser, logout, 
        updateProfile ,updatePassword,
        forgotPassword, resetPassword
    } from  '../callAPI/userCall'

export const UserSlice = createSlice({
    name:'loginUser',
    initialState:{
        currentUser:{},
        isLoading: null,
        isAuthenticated : null,
        error: null,
    },
    reducers:{
        clearErr: (state) => {
            state.error = null
        }
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


export const ProfileSlice = createSlice({
    name:'profile',
    initialState:{
        isUpdated: null,
        isDeleted: null,
        isLoading: null,
        error: null,
    },
    reducers:{
        updateProfileReset: (state) => {
            state.isUpdated = false
        },
        clearErr: (state) => {
            state.error = null
        }
    },
    extraReducers:{

        //UPDATE PROFILE
        [updateProfile.pending] : (state)=>{
            state.isLoading = true

        },
        [updateProfile.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.isUpdated = action.payload

        },
        [updateProfile.rejected] : (state)=>{
            state.isLoading = false
            state.error = true
        },

        //UPDATE PASSWORD
        [updatePassword.pending] : (state)=>{
            state.isLoading = true
        },
        [updatePassword.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.isUpdated = action.payload
        },
        [updatePassword.rejected] : (state)=>{
            state.isLoading = false
            state.error = true
        },

    },
});

export const ForgotPasswordSlice = createSlice({
    name:"forgotPassword",
    initialState:{
        isLoading: null,
        error: null,
        message: null,
        success:null
    },
    reducers:{
        clearErr:(state)=>{
            state.error = null
        },
        clearMessage:(state) => {
            state.message = null
        }
    },
    extraReducers:{
        //  forgot password
        [forgotPassword.pending]:(state) => {
            state.isLoading = true
            state.error = false
        },
        [forgotPassword.fulfilled]:(state, action) => {
            state.message = action.payload
            state.isLoading = false
        },
        [forgotPassword.rejected]:(state) => {
            state.error = true
            state.isLoading = false
        },

        //resetPassword
        [resetPassword.pending]:(state) => {
            state.isLoading = true
            state.error = false
        },
        [resetPassword.fulfilled]:(state, action) => {
            state.success = action.payload
            state.isLoading = false
        },
        [resetPassword.rejected]:(state) => {
            state.error = true
            state.isLoading = false
        },
    }
})


