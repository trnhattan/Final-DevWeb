
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
);

//admin
export const GetAllOrderAdmin = createAsyncThunk(
    'order/getAllOrders',
    async () => {
        try{

            const token = localStorage.getItem("token");
            const config = { headers: { Authorization : `Bearer ${token}`  } };
            const { data } = await publicRequest.get(
                "/admin/orders",
                config
            );
            return data.orders
        }catch(err){
            return err.response.data.message
        }
    }
);


export const UpdateOrderAdmin = createAsyncThunk(
    "order/updateOrder",
    async (MyData) => {
        try{

            const token = localStorage.getItem("token");
            const config = { headers: { Authorization : `Bearer ${token}`  } };
            const { data } = await publicRequest.put(
                `/admin/order/${MyData[0]}`,
                MyData[1],
                config
              );
            return data.success
        }
        catch(err){
            return err.response.data.message
        }
    }
)

export const DeleteOrderAdmin = createAsyncThunk(
    'order/deleteOrder',
    async (id) => {
        try{

            const token = localStorage.getItem("token");
            const config = { headers: { Authorization : `Bearer ${token}`  } };
            const { data } = await publicRequest.delete(
                `admin/order/${id}`,
                config
            )
            return data.success

        }catch(err){
            return err.response.data.message
        }
    }
)
