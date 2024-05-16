import { combineReducers } from "redux";
import toast from "./toast";
import counter from "./counter";

export default combineReducers({
  toast,
  counter,
});
