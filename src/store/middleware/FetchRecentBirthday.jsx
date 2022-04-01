import axios from "axios";
import {
  apiRecentBirthdayRequestSucceeded,
  apiRecentBirthdayRequestFailed,
} from "../recentBirthday";

const FetchRecentBirthday = (store) => (next) => async (action) => {
  if (action.type !== "GetRecentBirthday") return next(action);

  next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:2022/api/v1",
      url,
      method,
      data,
    });
    store.dispatch(
      apiRecentBirthdayRequestSucceeded({
        lists: response.data.body.data,
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
