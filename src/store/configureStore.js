import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import api from './middleware/api';

export default function(){
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api)
    })
};