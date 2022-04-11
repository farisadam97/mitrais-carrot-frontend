import axios from "axios";
import { baseURL } from "./BaseUrl";

const FetchUser = store => next => async action => {
    const { url, method, data } = action.payload;

    if (action.type !== "GetUser") return next(action);

    next(action);

    try{
        const response = await axios.request({
            baseURL,
            url,
            method,
            data,
        });
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

export default FetchUser;