import {createSlice} from "@reduxjs/toolkit"
import {addItemToCart,removeItemFromCart} from '../callAPI/cartCall'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        shippingInfo:{},
        isLoading: null,
        error: null,
    },
    reducers:{
        clearErr:(state)=>{
            state.error = null
        },
        clearCart:(state)=>{
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearShippingInfo:(state)=>{
            state.shippingInfo = {}
        }
    },
    extraReducers:{
        //ADD ITEM
        [addItemToCart.pending]:(state) => {
            state.isLoading = true
            state.error = false
        },
        [addItemToCart.fulfilled]:(state,action) => {
            state.isLoading =  false
            const item =  action.payload
            const isItemExist = state.cartItems.find(
                (i)=> i.product == item.product
            );
            if (isItemExist){
                state.cartItems.map((i)=> i.product === isItemExist.product ? item : i) 
            }
            else{
                state.cartItems = [...state.cartItems,item]
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            state.error = false
        },
        [addItemToCart.rejected]:(state) => {
            state.isLoading = false
            state.error = true
        },

        //REMOVE ITEM
        [removeItemFromCart.pending]:(state)=>{
            state.isLoading = true
            state.error = false
        },
        [removeItemFromCart.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.cartItems = state.cartItems.filter((i)=>i.product !== action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            state.error = false
        },
        [removeItemFromCart.rejected]:(state)=>{
            state.isLoading = false
            state.error = true
        },
    }
})