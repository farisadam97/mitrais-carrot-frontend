import axios from "axios";
import {
  apiDonationHistoryRequestSucceeded,
  apiDonationHistoryRequestFailed,
  resetDonationHistory,
} from "../donationHistory";

const FetchDonationHistory = (store) => (next) => async (action) => {
  const { url, method, data, onSuccess, onError } = action.payload;

  switch (action.type) {
    case "GetDonationHistory":
      try {
        const response = await axios.request({
          baseURL: "http://localhost:2022/api/v1",
          url,
          method,
          data,
        });
        store.dispatch(
          apiDonationHistoryRequestSucceeded({
            lists: response.data.body.data,
            pagination: response.data.body.pagination,
          })
        );
      } catch (error) {
        store.dispatch(
          apiDonationHistoryRequestFailed({
            error: error.message,
          })
        );
      }
      break;
    case "ResetDonationHistory":
      store.dispatch(
        resetDonationHistory({
          
        })
      );
      break;
    default:
      return next(action);
  }
};

export default FetchDonationHistory;
