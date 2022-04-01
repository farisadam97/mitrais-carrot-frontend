import axios from "axios";
import {
  apiHistoryTrxRequestSucceeded,
  apiHistoryTrxRequestFailed,
} from "../historyTransaction";

const FetchSharedHistory = (store) => (next) => async (action) => {
  if (action.type !== "GetSharedHistory") return next(action);

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
      apiHistoryTrxRequestSucceeded({
        lists: response.data.body.data,
        pagination: response.data.body.pagination,
      })
    );
  } catch (error) {
    store.dispatch(
      apiHistoryTrxRequestFailed({
        error: error.message,
      })
    );
  }
};

export default FetchSharedHistory;
