import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


export const getColor = createAsyncThunk("order/getColors" , async () =>{
    try {
        const {data} = await axiosRequest.get("Color/get-colors")
        return data?.data
    } catch (error) {
        console.error(error);
    }
})



export const getColors = createAsyncThunk("order/getUsers" , async () =>{
    try {
        const {data} = await axiosRequest.get("UserProfile/get-user-profiles")
        return data?.data
    } catch (error) {
        console.error(error);
    }
})

