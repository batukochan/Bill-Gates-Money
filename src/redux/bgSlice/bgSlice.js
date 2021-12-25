import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_URL}`)
    return res.data
})

export const billGatesSlice = createSlice({
    name:'bgmoney',
    initialState:{
        products:[

        ],
        money:100000000000
    },
    reducers:{
        increase:(state,action) => {
            const id = action.payload
            console.log("id",id)
            let filtered = state.products.filter(item => item.id === id)
            console.log(filtered)

        }
    },
    extraReducers:{
        [fetchData.fulfilled]:(state,action)=>{
            console.log(action.payload)
            state.products = action.payload
        },
        [fetchData.rejected]:(state,action)=>{
            state.error = action.error.message
            console.log(state.error)
        }

    }
})

export const {increase} = billGatesSlice.actions;

export default billGatesSlice.reducer;