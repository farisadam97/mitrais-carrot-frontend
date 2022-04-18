import axios from "axios";
import {
  apiRecentBirthdayRequestSucceeded,
  apiRecentBirthdayRequestFailed,
} from "../recentBirthday";

const FetchRecentBirthday = (store) => (next) => async (action) => {
  if (action.type !== "GetRecentBirthday") return next(action);

  next(action);

  const { url, method, data, headers, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:2022/api/v1",
      url,
      method,
      data,
      headers,
    });
    store.dispatch(
      apiRecentBirthdayRequestSucceeded({
        lists: response.data.body.data,
        pagination: response.data.body.pagination,
      })
    );
  } catch (error) {
    store.dispatch(
      apiRecentBirthdayRequestFailed({
        error,
      })
    );
  }
};
export default FetchRecentBirthday;
