
import {publicRequest} from '../requestMethods'
import { createAsyncThunk } from '@reduxjs/toolkit';

//get all products  
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async ({category, color, strap, currentPage }) => {
        // try{

            // let link = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
            
            let link = `/products`


            if (category === "ALL"){
                link = `/products`
            }
            else {
                link = `/products?category=${category}`;
            }
            
            // if (category !== "") {
            //     link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
            // }
         

            const { data } = await publicRequest.get(link);
            return data
        // }catch(err){
        //     return err.response.data.message
        // }
    }
)


//get  product detail 
export const getProductDetail = createAsyncThunk(
    "product/getProductDetail",
    async (id) => {
        // try{
            const { data } = await publicRequest.get(
                `/product/${id}`
            );
            return data.product
        // }catch(err){
        //     return err.response.data.message
        // }
    }
)