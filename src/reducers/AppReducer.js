import { combineReducers } from "redux";
import PhotoReducer from "./PhotoReducer";

const AppReducer = combineReducers({
  gallery: PhotoReducer,
});

export default AppReducer;
