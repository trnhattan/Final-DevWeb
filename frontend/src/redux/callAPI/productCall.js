
import {publicRequest} from '../requestMethods'
import { createAsyncThunk } from '@reduxjs/toolkit';

//get all products  
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async ({role,category,color, strap}) => {
        // try{

            // let link = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
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
                            link = `/products?category=${category}`;
                        }   
                    }
                    else{
                        link  = "/products";
                    }
                    break;
                default:
                    // link = "/products"
                    break;
            }
            

            // if (category !==""){
            //     link = `/products?category=${category}`
            //     if (color !== ""){   
            //         link = `/products?category=${category}&color=${color}`
            //         const { data } = await publicRequest.get(link);
            //         return data
            //     }
            //     const { data } = await publicRequest.get(link);
            //     return data
            // }
    
            const {data} = await publicRequest.get(link);
            return data;
           
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