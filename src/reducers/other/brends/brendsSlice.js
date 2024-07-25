import { createSlice } from "@reduxjs/toolkit";
import { getBrends } from "../../../api/other/brends/brends";


export const brendSlice = createSlice({
    name : 'brends',
    initialState : {
        data : [],
        skeleton : true
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getBrends.fulfilled , (state , action) => {
            state.data = action.payload
            state.skeleton = false
        })
     }
})

export default brendSlice.reducer