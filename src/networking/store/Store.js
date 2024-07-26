import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from './../slice/BackgroundSlice';

export const store = configureStore({
    reducer: {
        backgroundSlice: backgroundReducer,
    },
});