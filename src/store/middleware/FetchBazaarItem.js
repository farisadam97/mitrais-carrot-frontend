import axios from "axios";
import { fetchBazaarItemSuccess, fetchBazaarItemFailed } from "../bazaarItem";

const FetchBazaarItem = store => next => async action => {
    if(action.type !== 'GetBazaarItem"') return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:2022/api/v1',
            url,
            method,
            data,
        });
        store.dispatch(fetchBazaarItemSuccess({
            items: response.data.body.data
        }))
    }catch(error){
        store.dispatch(fetchBazaarItemFailed({
            error
        }))
    }
}
export default FetchBazaarItem;