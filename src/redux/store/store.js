import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "../reducer/likeSlice";
import playerReducer from "../reducer/playerSlice";
 
export const store = configureStore({
    reducer:{
        likeReducer,
        playerReducer
    }
})