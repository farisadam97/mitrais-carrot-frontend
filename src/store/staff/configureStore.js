import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import fetchUserBasket from './middleware/fetchUserBasket';

const api = [fetchUserBasket];

export default function(){
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api)
    })
};