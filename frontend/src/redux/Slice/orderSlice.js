import {createSlice} from "@reduxjs/toolkit"
import {CreateOrder, MyOrders, GetOrderDetail} from '../callAPI/orderCall'

export const newOrderSlice = createSlice({
    name: "newOrder",
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
        [CreateOrder.pending]:(state)=>{
            state.isLoading = true
            state.error = false
        },
        [CreateOrder.fulfilled]:(state, action)=>{
            state.isLoading = false
            state.error = false
            state.order = action.payload
        },
        [CreateOrder.rejected]:(state)=>{
            state.isLoading = false
            state.error = true
        },
    }
})

export const myOrderSlice = createSlice({
    name: "myOrder",
    initialState:{
        orders: [],
        isLoading: null,
        error: null,
    },
    reducers:{
        clearErr:(state)=>{
            state.error = null
        }
    },
    extraReducers:{
        [MyOrders.pending]:(state)=>{
            state.error = false
            state.isLoading = true
        },
        [MyOrders.fulfilled]:(state, action)=>{
            state.orders = action.payload
            state.error = false
            state.isLoading = false
        },  
        [MyOrders.rejected]:(state)=>{
            state.error = true
            state.isLoading = false
        },
    }
})


export const getOrderDetailSlice =  createSlice({
    name:'getOrderDetail',
    initialState:{
        order:{},
        isLoading: null,
        error: null,
    },
    reducers:{
        clearErr:(state)=>{
            state.error = null
        }
    },
    extraReducers:{
        [GetOrderDetail.pending]:(state)=>{
            state.error = false
            state.isLoading = true
        },
        [GetOrderDetail.fulfilled]:(state, action)=>{
            state.order = action.payload
            state.error = false
            state.isLoading = false
        },  
        [GetOrderDetail.rejected]:(state)=>{
            state.error = true
            state.isLoading = false
        },
    }
})