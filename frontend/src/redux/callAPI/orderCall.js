
import {publicRequest} from '../requestMethods'
import { createAsyncThunk } from '@reduxjs/toolkit';


export const createOrder = createAsyncThunk(
    "order/newOrder",
    async (order) => {
        try{
            const token = localStorage.getItem("token");
            const config = { headers: { Authorization : `Bearer ${token}`  } };

            const  { data } = await publicRequest.post(
                "/order/new", 
                order, 
                config
            );
            return data.order

        }catch (err){
            return err.response.data.message
        }
    }
)