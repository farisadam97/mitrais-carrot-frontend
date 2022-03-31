import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import FetchManagerList from './middleware/fetchManagerList';

const api = [FetchManagerList];

export default function(){
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...api)
    })
};