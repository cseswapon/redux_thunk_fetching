import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import dataFetch from "./datafetch";
import postData from "./postData";

const rootReducer = combineReducers({
  counter: counterReducer,
  fetch: dataFetch,
  post: postData,
});

export default rootReducer;
