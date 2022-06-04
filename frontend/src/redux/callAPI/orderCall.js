
import {publicRequest} from '../requestMethods'
import { createAsyncThunk } from '@reduxjs/toolkit';


export const CreateOrder = createAsyncThunk(
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
);

export const MyOrders = createAsyncThunk(
    "order/myOrder",
    async () => {
        try{
            const token = localStorage.getItem("token");
            const config = { headers: { Authorization : `Bearer ${token}`  } };

            const {data} = await publicRequest.get(
                "orders/me",
                config
            )
            return data.orders
        }catch(err){
            return err.response.data.message
        }
    }
)

export const GetOrderDetail = createAsyncThunk(
    "order/orderDetail",
    async (id) => {
        try{
            const token = localStorage.getItem("token");
            const config = { headers: { Authorization : `Bearer ${token}`  } };

            const { data } = await publicRequest.get(
                `/order/${id}`,
                config
            )

            return data.order
        }catch(err){
            return err.response.data.message
        }
    }
)