import axios from "axios";
import { fetchManagerListSuccess, fetchManagerListFailed } from "../managerList";
import { baseURL } from "./BaseUrl";

const FetchManagerList = store => next => async action => {
    if (action.type !== "GetManagerList") return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
    // switch(action.type){
    //     case `GetManagerList`:
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                });
                store.dispatch(fetchManagerListSuccess({
                    lists: response.data.body.data,
                    pagination: response.data.body.pagination,
                }))
            }catch(error){
                store.dispatch(fetchManagerListFailed({
                    error : error.message,
                }))
            }
           // break;
        // default:
        //     return next(action);
    }


export default FetchManagerList