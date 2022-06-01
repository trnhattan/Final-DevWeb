import { configureStore, combineReducers} from "@reduxjs/toolkit";


import {persistStore,persistReducer, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {UserSlice, 
        ProfileSlice,
        ForgotPasswordSlice
      } from "./Slice/userSlice";

import {productsSlide, productSlice} from "./Slice/productSlice";

import {cartSlice} from './Slice/cartSlice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({
    user: UserSlice.reducer,
    userProfile: ProfileSlice.reducer,
    forgotPassword: ForgotPasswordSlice.reducer,
    
    cart: cartSlice.reducer,

    products: productsSlide.reducer,
    product: productSlice.reducer, 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store =  configureStore({

    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)
