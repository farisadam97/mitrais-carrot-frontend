import axios from "axios";
import { FetchHarvestListSuccess, FetchHarvestListFailed } from "../harvest";
import { baseURL } from "./BaseUrl";

const FetchHarvest = store => next => async action => {
    if (action.type !== "GetHarvest") return next(action);

    next(action);

    const { url, method, data, headers, onSuccess, onError } = action.payload;
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    headers
                });
                store.dispatch(FetchHarvestListSuccess({
                    lists: response.data.body.data,
                    pagination: response.data.body.pagination,
                }))
            }catch(error){
                store.dispatch(FetchHarvestListFailed({
                    error : error.message,
                }))
            }
    }


export default FetchHarvest