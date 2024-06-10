import { combineReducers } from "redux";
import library from "./slices/library";
import toast from "./slices/toast";

export default combineReducers({
  library,
  toast,
});
