import axios from "axios";
import {
  apiRewardHistoryRequestSucceeded,
  apiRewardHistoryRequestFailed,
  resetRewardHistory,
} from "../rewardHistory";

const FetchRewardHistory = (store) => (next) => async (action) => {
  const { url, method, data, onSuccess, onError } = action.payload;

  switch (action.type) {
    case "GetRewardHistory":
      try {
        const response = await axios.request({
          baseURL: "http://localhost:2022/api/v1",
          url,
          method,
          data,
        });
        store.dispatch(
          apiRewardHistoryRequestSucceeded({
            lists: response.data.body.data,
            pagination: response.data.body.pagination,
          })
        );
      } catch (error) {
        store.dispatch(
          apiRewardHistoryRequestFailed({
            error: error.message,
          })
        );
      }
      break;
    case "ResetRewardHistory":
      store.dispatch(resetRewardHistory({}));
      break;
    default:
      return next(action);
  }
 
};

export default FetchRewardHistory;
