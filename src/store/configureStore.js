import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import FetchBazaarItem from './middleware/FetchBazaarItem';
import FetchTransaction from './middleware/FetchTransaction';

const api = [FetchBazaarItem, FetchTransaction];

export default function(){
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api)
    })
};