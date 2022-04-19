import axios from "axios";
import { baseURL } from "./BaseUrl";
import { apiDistFailed, apiDistSuccess } from "../distribution";

const FetchDistribution = store => next => async action => {
    const { url, method, headers } = action.payload;

    switch(action.type) {
        case "GetDistribution":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    headers,
                });
                store.dispatch(
                    apiDistSuccess({
                        distribution: response.data.body.data,
                        pagination: response.data.body.pagination,
                    })
                )
            } catch(error){
                store.dispatch(
                    apiDistFailed({
                        error: error.message,
                    })
                )
            }
            break;
        default:
            return next(action);
    }
}

export default FetchDistribution;