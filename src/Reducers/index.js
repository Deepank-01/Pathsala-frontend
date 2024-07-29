import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Slice/authSlice";
import profileSlice from "../Slice/profileSlice";
import courseSlice from "../Slice/courseSlice";
import cartSlice from "../Slice/cartSlice";

const RootReducers=combineReducers({
auth:authSlice,
profile:profileSlice,
course:courseSlice,
cart:cartSlice
})
export default RootReducers