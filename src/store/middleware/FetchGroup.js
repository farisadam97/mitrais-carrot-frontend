import axios from "axios";
import { baseURL } from "./BaseUrl";
import { fetchFailed } from "../bazaarItem";
import { fetchGroupSuccess, fetchGroupDetailSuccess, fetchGroupStaff } from "../userGroup";

const FetchGroup = store => next => async action => {
    const { url, method, data } = action.payload;

    switch(action.type){
        case "GetGroupList":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                });
                store.dispatch(fetchGroupSuccess({
                    groups: response.data.body.data,
                    pagination: response.data.body.pagination
                }))
            } catch(error){
                store.dispatch(fetchFailed({
                    error
                }));
            }
            break;
        case "AddGroup":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                });
                // console.log(response);
            }catch(error){
                store.dispatch(fetchFailed({
                    error
                }));
            }
            break;
        case "UpdateGroup":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data
                });
                // console.log(response);
            }catch(error){
                store.dispatch(fetchFailed({
                    error
                }));
            }
            break;
        case "DeleteGroup":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                });
                // console.log(response);
            }catch(error){
                store.dispatch(fetchFailed({
                    error
                }));
            }
            break;
        case "GetGroupDetails":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                })
                store.dispatch(fetchGroupDetailSuccess({
                    groupDetails: response.data
                }))
            }catch(error){
                store.dispatch(fetchFailed({
                    error
                }));
            }
            break;
        case "GetGroupStaff":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data
                })
                store.dispatch(fetchGroupStaff({
                    groupStaff: response.data.body.data,
                    pagination: response.data.body.pagination,
                }))
            }catch(error){
                store.dispatch(fetchFailed({
                    error
                }));
            }
            break;
        default:
            return next(action);
    }
}

export default FetchGroup;