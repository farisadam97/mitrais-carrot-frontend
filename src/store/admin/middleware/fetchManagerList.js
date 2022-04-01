import axios from "axios";
import { fetchManagerListSuccess, fetchManagerListFailed } from "../managerList";
import { baseURL } from "./BaseUrl";

const FetchManagerList = store => next => async action => {
    const { url, method, data, onSuccess, onError } = action.payload;
    switch(action.type){
        case `GetManagerList`:
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                });
                store.dispatch(fetchManagerListSuccess({
                    manager: response.data.body.data
                }))
            }catch(error){
                store.dispatch(fetchManagerListFailed({
                    error
                }))
            }
            break;
        default:
            return next(action);
    }
}

export default FetchManagerList