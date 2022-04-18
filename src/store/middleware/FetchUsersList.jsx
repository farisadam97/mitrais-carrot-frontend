import axios from "axios";
import {
  apiUsersListRequestSuccess,
  apiUsersListRequestFailed,
} from "../usersList";

const FetchUsersList = (store) => (next) => async (action) => {
  if (action.type !== "GetUsersList") return next(action);

  next(action);

  const { url, method, headers, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:2022/api/v1",
      url,
      method,
      headers,
      data,
    });
    store.dispatch(
      apiUsersListRequestSuccess({
        lists: response.data.body.data,
        pagination: response.data.body.pagination,
      })
    );
  } catch (error) {
    store.dispatch(
      apiUsersListRequestFailed({
        error: error.message,
      })
    );
  }
};

export default FetchUsersList;
