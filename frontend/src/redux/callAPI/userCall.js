
import {publicRequest} from '../requestMethods'
import { createAsyncThunk } from '@reduxjs/toolkit';

//Login
export const login = createAsyncThunk (
    "user/login",
    async (user)=> {
        // try{
            // const config = { headers: { "Content-Type": "application/json" } }; 
            const {data} = await publicRequest.post(
                `/login`,
                user,
                // config,
            )
            return data.user
        // }catch(err){
        //     return err.response.data.message
        // }
    }
);


//Regiter
export const register = createAsyncThunk(
    "user/register",
    async (userData) => {
        const {data} = await publicRequest.post(
            `/register`, 
            userData
        )
        return data.user
    }    
);


//Load user
export const loadUser = createAsyncThunk(
    "user/loadUser",
    async () => {
        const {data} = await publicRequest.get(
            `/me`,
        )
        return data.user
    }
);

//Log out
export const logout = createAsyncThunk(
    'user/logout',
    async()=>{
        await publicRequest.get(
            `/logout`
        )
    }
)