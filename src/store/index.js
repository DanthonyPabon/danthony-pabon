import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import AppReducer from "../reducers/AppReducer"; // the value from combineReducers


export const store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));
