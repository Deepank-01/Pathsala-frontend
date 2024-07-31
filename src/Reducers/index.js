import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Slice/authSlice";
import profileSlice from "../Slice/profileSlice";
import courseSlice from "../Slice/courseSlice";
import cartSlice from "../Slice/cartSlice";
import viewCourseSlice from "../Slice/viewCourseSlice";

const RootReducers=combineReducers({
auth:authSlice,
profile:profileSlice,
course:courseSlice,
cart:cartSlice,
viewCourse:viewCourseSlice
})
export default RootReducers