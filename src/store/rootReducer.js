import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import appReducer from "../features/app/appSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    // Add other reducers here
});

export default rootReducer;
