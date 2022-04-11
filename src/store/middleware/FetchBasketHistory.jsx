import axios from "axios";
import {
  apiBasketHistoryRequestSucceeded,
  apiBasketHistoryRequestFailed,
} from "../basketHistory";

const FetchBasketHistory = (store) => (next) => async (action) => {
  if (action.type !== "GetBasketHistory") return next(action);

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
      apiBasketHistoryRequestSucceeded({
        lists: response.data.body.data,
      })
    );
  } catch (error) {
    store.dispatch(
      apiBasketHistoryRequestFailed({
        error: error.message,
      })
    );
  }
};

export default FetchBasketHistory;
