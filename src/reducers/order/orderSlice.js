import { createSlice } from "@reduxjs/toolkit";
import { getColor, getColors } from "../../api/order/order";

export const orderSlice = createSlice({
    name : "order",
    initialState  : {
        data: [],
        data2 : []
    },
    reducers  : {},
    extraReducers : (builder) => {
        builder.addCase(getColor.fulfilled , (state , action) => {
            state.data = action.payload
        })
        builder.addCase(getColors.fulfilled , (state , action) => {
            state.data2 = action.payload
        })
    }
})

export default orderSlice.reducer