import axios from "axios";
import { fetchBazaarItemSuccess, fetchFailed, fetchDetailItemSuccess } from "../bazaarItem";
import { baseURL } from "./BaseUrl";

const FetchBazaarItem = store => next => async action => {
    const { url, method, data, onSuccess, onError } = action.payload;

    switch(action.type){
        case 'GetBazaarItem':
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                });
                store.dispatch(fetchBazaarItemSuccess({
                    items: response.data.body.data
                }))
            }catch(error){
                store.dispatch(fetchFailed({
                    error
                }))
            }
            break;
        case 'GetItemDetails':
            try{
                    const response = await axios.request({
                        baseURL,
                        url,
                        method,
                        data,
                    });
                    if(response.payload )
                    store.dispatch(fetchDetailItemSuccess({
                        detailItem: response.data.body.data
                    }))
            }catch(error){
                store.dispatch(fetchFailed({
                    error: error.message
                }))
            }
            break;
        default:
            return next(action);
    }
}
export default FetchBazaarItem;