import { combineReducers } from "redux";
import managerListReducer from "./managerList";

export default combineReducers({
    bazaarItem: managerListReducer,
})