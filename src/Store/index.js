import { combineReducers } from "redux";
import CustomerReducer from "./Reducer/CustomerReducer";

const rootReducer = combineReducers({
  customer: CustomerReducer
});

export default rootReducer;
