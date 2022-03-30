import axios from "axios";
import { baseURL } from "./BaseUrl";

const FetchTransaction = store => next => async action => {
    const { url, method, data, onSuccess, onError } = action.payload;

    switch(action.type){
        case 'exchangeReward':
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                })
                // store.dispatch(fetchTransactionSuccess({
                    //todo dispatch this after email solved
                // }))
            }catch(error){
                store.dispatch()
            }
            break;
        default:
            return next(action);
    }
}
export default FetchTransaction;