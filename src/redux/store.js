import { configureStore } from "@reduxjs/toolkit";
import bgSlice from "./bgSlice/bgSlice";
const store = configureStore({
    reducer:{
        billgates:bgSlice
    }
})

export default store;