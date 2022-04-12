import axios from "axios";
import { fetchFailed } from "../bazaarItem";
import { fetchTransactionSuccess } from "../transaction";
import { baseURL } from "./BaseUrl";

const FetchTransaction = (store) => (next) => async (action) => {
  if (action.type != "exchangeReward") {
    return next(action);
  }
  const { url, method, data, onSuccess, onError } = action.payload;
  switch (action.type) {
    case "exchangeReward":
      try {
        const response = await axios.request({
          baseURL,
          url,
          method,
          data,
        });
        if (!response.data.payload.id) throw Error("Exchange Item Failed");
        store.dispatch(
          fetchTransactionSuccess({
            transaction: response.data.payload,
          })
        );
      } catch (error) {
        store.dispatch(
          fetchFailed({
            error: error.message,
          })
        );
      }
      break;
    default:
      return next(action);
  }
};
export default FetchTransaction;
