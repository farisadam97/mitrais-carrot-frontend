import axios from "axios";
import { fetchUserWithBasketSuccess, fetchUserWithBasketFailed } from "../staffSummary";

const fetchUserBasket = store => next => async action => {
    if(action.type !== 'GetStaffBasket') return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:2022//api/v1/basket',
            url,
            method,
            data,
        });
        store.dispatch(fetchUserWithBasketSuccess({
            items: response.data.body.data
        }))
    }catch(error){
        store.dispatch(fetchUserWithBasketFailed({
            error
        }))
    }
}
export default fetchUserBasket;