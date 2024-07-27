import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Slice/authSlice";
import profileSlice from "../Slice/profileSlice";
import courseSlice from "../Slice/courseSlice";

const RootReducers=combineReducers({
auth:authSlice,
profile:profileSlice,
course:courseSlice
})
export default RootReducers