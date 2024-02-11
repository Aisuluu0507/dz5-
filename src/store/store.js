import { configureStore } from "@reduxjs/toolkit";

import { marketReducer } from "./ReducerSlice";

export const store = configureStore({
    reducer:{
        posts:marketReducer,
    }
})


