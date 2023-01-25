import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./feature/userSlice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  user: UserReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
