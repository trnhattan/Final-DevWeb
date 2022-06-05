
import {publicRequest} from '../requestMethods'
import { createAsyncThunk } from '@reduxjs/toolkit';

//get all products  
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async ({role,category,color, strap, sortType}) => {
        try{

            let link = ""
            switch(role){
                case "latest":
                    link  = "/products";
                    break;
                case "category":
                    if (category){
                        if (color){
                            if (strap){
                                link = `/products?category=${category}&color=${color}&strap=${strap}`;
                            }
                            else{
                                link = `/products?category=${category}&color=${color}`;
                            }
                        }
                        else{
                            if (strap){
                                link = `/products?category=${category}&strap=${strap}`;
                            }
                            else{
                                link = `/products?category=${category}`;
                            }
                        }   
                    }
                    else{
                        if (color){
                            if (strap){
                                link = `/products?color=${color}&strap=${strap}`;
                            }
                            else{
                                link = `/products?color=${color}`;
                            }
                        }
                        else{
                            if (strap){
                                link = `/products?strap=${strap}`;
                            }
                            else{
                                link = `/products`;
                            }
                        }           
                    }
                    break;
                default:
                    // link = "/products"
                    break;
            }
            const {data} = await publicRequest.get(link);


            if (sortType === "newest"){
                const newProducts = data.products.sort((a,b)=> b.createAt - a.createAt)
                data.products = newProducts
                return data
            }
            else if (sortType ===  "price-asc"){
                const newProducts = data.products.sort((a,b)=> a.price - b.price)
                data.products = newProducts
                return data
            }
            else if (sortType ===  "price-desc") {
                const newProducts = data.products.sort((a,b)=> b.price - a.price)
                data.products = newProducts
                return data
            }

        
           
        }catch(err){
            return err.response.data.message
        }
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