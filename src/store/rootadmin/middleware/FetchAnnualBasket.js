import axios from "axios";
import { FetchAnnualBasketSuccess, FetchAnnualBasketFailed } from "../annualBasket";
import { baseURL } from "./BaseUrl";

const FetchAnnualBasket = store => next => async action => {
    if (action.type !== "GetAnnualBasket") return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                });
                store.dispatch(FetchAnnualBasketSuccess({
                    lists: response.data.body.data,
                    pagination: response.data.body.pagination,
                }))
            }catch(error){
                store.dispatch(FetchAnnualBasketFailed({
                    error : error.message,
                }))
            }
    }


export default FetchAnnualBasket