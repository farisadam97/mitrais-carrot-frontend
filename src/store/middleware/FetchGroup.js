import axios from "axios";
import { baseURL } from "./BaseUrl";
import { fetchGroupSuccess, fetchGroupDetailSuccess, fetchGroupStaff, fetchGroupFailed } from "../userGroup";

const FetchGroup = store => next => async action => {
    const { url, method, data, headers } = action.payload;

    switch(action.type){
        case "GetGroupList":
            try{
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    headers
                });
                store.dispatch(fetchGroupSuccess({
                    groups: response.data.body.data,
                    pagination: response.data.body.pagination
                }))
            } catch(error){
                store.dispatch(fetchGroupFailed({
                    error
                }));
            }
            break;
        case "AddGroup":
            try{
                await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    headers
                });
            }catch(error){
                store.dispatch(fetchGroupFailed({
                    error
                }));
            }
            break;
        case "UpdateGroup":
            try{
                await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    headers
                });
            }catch(error){
                store.dispatch(fetchGroupFailed({
                    error
                }));
            }
            break;
        case "DeleteGroup":
            try{
                await axios.request({
                    baseURL,
                    url,
                    method,
                    headers
                });
            }catch(error){
                store.dispatch(fetchGroupFailed({
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
                    headers,
                })
                store.dispatch(fetchGroupDetailSuccess({
                    groupDetails: response.data
                }))
            }catch(error){
                store.dispatch(fetchGroupFailed({
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
                    data,
                    headers
                })
                store.dispatch(fetchGroupStaff({
                    groupStaff: response.data.body.data,
                    pagination: response.data.body.pagination,
                }))
            }catch(error){
                store.dispatch(fetchGroupFailed({
                    error
                }));
            }
            break;
        default:
            return next(action);
    }
}

export default FetchGroup;