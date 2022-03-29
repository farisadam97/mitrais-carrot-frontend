import { combineReducers } from "redux";
import historyTransaction from "./historyTransaction";

const rootReducer = combineReducers({
  history: historyTransaction,
});

export default rootReducer;
