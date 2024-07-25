import { createSlice } from "@reduxjs/toolkit";
import { getCotegories } from "../../../api/other/cotegories/cotegories";

export const cotegoriesSlice = createSlice({
    name : "cotegories" ,
    initialState : {
        data : [],
        scleton : true
    },
    reducers : {
        Scleton : (state , action) =>{
            state.scleton = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getCotegories.fulfilled , (state , action) =>{
            state.data = action.payload
            state.scleton = false
        })        
    }
})
export const { Scleton } = cotegoriesSlice.actions

export default cotegoriesSlice.reducer