import { createSlice } from "@reduxjs/toolkit";
import {getProductDetail} from '../callAPI/productCall'
 
export const productSlice = createSlice({
    name:"product",
    initialState:{
        product:null,
        isLoading: null,
        error: null,
    },
    reducers:{
        clearError:(state) =>{
            state.error = null
        }
    },
    extraReducers:{
        [getProductDetail.pending]:(state)=>{
            state.isLoading = true
            state.error = false
        },
        [getProductDetail.fulfilled]:(state, action)=>{
            state.product = action.payload
            state.isLoading = false
            state.error = false
        },
        [getProductDetail.rejected]:(state)=>{
            state.product = null
            state.error = true
            state.isLoading = false
        },
    }
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
    extraReducers:{

    }
})
