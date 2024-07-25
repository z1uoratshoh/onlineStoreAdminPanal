import { createSlice } from "@reduxjs/toolkit";
import { getProductsdesshboard } from "../../api/deshboard/deshboard";


export const deshboardSlice = createSlice({
    name : 'deshboard',
    initialState : {
        data : []
    },
    reducers : [],
    extraReducers : (builder) => {
        builder.addCase(getProductsdesshboard.fulfilled , (state , action) => {
            state.data = action.payload
        })
    }
})

export default deshboardSlice.reducer