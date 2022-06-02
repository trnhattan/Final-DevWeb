
import {publicRequest} from '../requestMethods'
import { createAsyncThunk } from '@reduxjs/toolkit';

//get all products  
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async () => {
        // try{
            const keyword = ""
            const currentPage = 1
            const price = [0, 10000000]
            const category = ""

            // let link = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

            // if (category !== "") {
            //     link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
            // }
            let link = "/products"
            

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