import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import FetchBazaarItem from './middleware/FetchBazaarItem';

const api = [FetchBazaarItem];

export default function(){
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api)
    })
};