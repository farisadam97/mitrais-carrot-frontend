import axios from "axios";
import { baseURL } from "./BaseUrl";
import { apiUserRequestSuccess, apiUserRequestFailed, apiBasketRequestFailed, apiBasketRequestSuccess } from "../activeUser";

const FetchUser = store => next => async action => {
    const { url, method, data, headers } = action.payload;

    switch(action.type) {
        case "GetUser":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    headers,
                });
                store.dispatch(
                    apiUserRequestSuccess({
                        data: response.data.body.data[0],
                    })
                )
            } catch(error){
                store.dispatch(
                    apiUserRequestFailed({
                        error: error.message,
                    })
                )
            }
            break;
        case "GetBasket":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    headers,
                });
                store.dispatch(
                    apiBasketRequestSuccess({
                        basket: response.data.body.data[0],
                    })
                )
            }catch(error){
                store.dispatch(
                    apiBasketRequestFailed({
                        error: error.message,
                    })
                )
            }
            break;
        default:
            return next(action);
    }
}

export default FetchUser;