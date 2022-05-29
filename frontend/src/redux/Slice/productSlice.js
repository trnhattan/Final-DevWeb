import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"product",
    initialState:{
        product:null,
        isLoading: false,
        error: "",
    },
    reducers:{
        productDetailsRequest:(state)=>{
            state.isLoading = true
        },
        productDetailsSuccess:(state, action)=>{
            state.isLoading = false
            state.product = action.payload
        },
        productDetailsFailure:(state,action)=>{ 
            state.isLoading = false
            state.error = action.payload
        },
        clearError:(state) =>{
            state.error = ""
        }
    },
})

export const productsSlide = createSlice({
    name:"products",
    initialState:{
        products:[],
        isLoading: false,
        error: "",
        productsCount: 0,
        resultPerPage: 0,
        filteredProductsCount: 0,
        
    },
    reducers:{
        allProductsRequest:(state)=>{
            state.isLoading = true
        },
        allProductsSuccess:(state, action)=>{
            state.isLoading = false
            state.products = action.payload.products
            state.productsCount =  action.payload.productsCount
            state.resultPerPage = action.payload.resultPerPage
            state.filteredProductsCount =  action.payload.filteredProductsCount
        },
        allProductsFailure:(state,action)=>{ 
            state.isLoading = false
            state.error = action.payload
        },
        clearError:(state) =>{
            state.error = ""
        }
    },
})
