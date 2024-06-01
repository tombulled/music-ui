import { combineReducers } from "redux";
import library from "./library";
import toast from "./toast";

export default combineReducers({
  library,
  toast,
});
