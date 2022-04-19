import axios from "axios";
import { FetchAnnualCarrotSuccess, FetchAnnualCarrotFailed } from "../annualCarrot";
import { baseURL } from "./BaseUrl";

const FetchAnnualCarrot = store => next => async action => {
    if (action.type !== "GetHarvest") return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                });
                store.dispatch(FetchAnnualCarrotSuccess({
                    lists: response.data.body.data,
                    pagination: response.data.body.pagination,
                }))
            }catch(error){
                store.dispatch(FetchAnnualCarrotFailed({
                    error : error.message,
                }))
            }
    }


export default FetchAnnualCarrot