import axios from 'axios';
import { baseURL } from './BaseUrl';
import { fetchCarrotStaffFailed, fetchCarrotStaffSuccess } from '../carrotStaff';

const FetchCarrotStaff = store => next => async action => {
    if (action.type !== "GetCarrotStaff") return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
        try{
            const response = await axios.request({
                baseURL,
                url,
                method,
                data,
            });
            store.dispatch(fetchCarrotStaffSuccess({
                lists: response.data.body.data,
                pagination: response.data.body.pagination,
            }))
        }catch(error){
            store.dispatch(fetchCarrotStaffFailed({
                error : error.message,
            }))
        }
}

export default FetchCarrotStaff