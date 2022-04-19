import axios from "axios";
import { baseURL } from "./BaseUrl";
import { fetchSettingsSuccess, fetchUpdateSetting } from "../carrotSettings";
import { fetchFailed } from "../bazaarItem";

const FetchSetting = store => next => async action => {
    const { url, method, data, headers } = action.payload;

    switch(action.type){
        case "GetSettings":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    headers,
                })
                store.dispatch(fetchSettingsSuccess({
                    annualCarrotMinimum: response.data.annualCarrotMinimum,
                    carrotBirthDayShare: response.data.carrotBirthDayShare,
                    initialCarrot: response.data.initialCarrot,
                }))
            } catch(error){
                store.dispatch(fetchFailed({
                    error
                }));
            }
            break;
        case "UpdateSettings":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    headers,
                })
                store.dispatch(fetchUpdateSetting({
                    annualCarrotMinimum: response.data.annualCarrotMinimum,
                    carrotBirthDayShare: response.data.carrotBirthDayShare,
                    initialCarrot: response.data.initialCarrot,
                }))
            } catch(error){
                store.dispatch(fetchFailed({
                    error
                }))
            }
            break;
        default:
            return next(action);
    }
}

export default FetchSetting;