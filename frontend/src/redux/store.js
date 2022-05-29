import { configureStore } from "@reduxjs/toolkit";
import {loginSlice, registerSlice}  from "./Slice/userSlice";
import {productsSlide, productSlice} from "./Slice/productSlice";


export const store =  configureStore({
    reducer:{
        login: loginSlice.reducer,
        register: registerSlice.reducer,
        products: productsSlide.reducer,
        product: productSlice.reducer,
    },
});
