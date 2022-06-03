import {createSlice} from "@reduxjs/toolkit"
import {createOrder} from '../callAPI/orderCall'

export const OrderSlice = createSlice({
    name: "order",
    initialState:{
        order: {},
        isLoading: null,
        error:null, 
    },
    reducers:{
        clearErr: (state)=>{
            state.error = null
        }
    },
    extraReducers:{
        [createOrder.pending]:(state)=>{
            state.isLoading = true
            state.error = false
        },
        [createOrder.fulfilled]:(state, action)=>{
            state.isLoading = false
            state.error = false
            state.order = action.payload
        },
        [createOrder.rejected]:(state)=>{
            state.isLoading = false
            state.error = true
        },
    }
})