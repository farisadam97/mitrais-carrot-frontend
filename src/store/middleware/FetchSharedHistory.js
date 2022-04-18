import axios from "axios";
import {
  apiHistoryTrxRequestSucceeded,
  apiHistoryTrxRequestFailed,
  resetHistory,
} from "../historyTransaction";

const FetchSharedHistory = (store) => (next) => async (action) => {
  const { url, method, data, headers, onSuccess, onError } = action.payload;

  switch (action.type) {
    case "GetSharedHistory":
      try {
        const response = await axios.request({
          baseURL: "http://localhost:2022/api/v1",
          url,
          method,
          data,
          headers,
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
      break;
    case "ResetSharedHistory":
      store.dispatch(resetHistory({}));
      break;
    default:
      return next(action);
  }
};

export default FetchSharedHistory;
