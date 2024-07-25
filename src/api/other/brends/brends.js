import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../utils/axiosRequest";


export const getBrends = createAsyncThunk("brends/getBrends" , async () => {
    try {
        const {data} = await axiosRequest.get("Brand/get-brands")
        return data?.data
    } catch (error) {
        console.error(error);
    }
} )

export const deleteBrend = createAsyncThunk("brends/deleteBrend" , async (id , {dispatch}) =>{
    try {
        const {data} = await axiosRequest.delete("Brand/delete-brand?id=" + id)
        dispatch(getBrends())
    } catch (error) {
        console.error(error);
    }
} )

export const putBrend = createAsyncThunk("brends/putBrend" , async (obj , {dispatch}) => {
    try {
        const {data} = await axiosRequest.put(`Brand/update-brand?Id=${obj.id}&BrandName=${obj.name}`)
        dispatch(getBrends())
    } catch (error) {
        console.error(error);
    }
})

export const addBrend = createAsyncThunk("brend/addBrend" , async ( name , {dispatch}) =>{
    console.log(name);
    try {
        const {data} = await axiosRequest.post("Brand/add-brand?BrandName=" + name)
        dispatch(getBrends())
    } catch (error) {
        console.error(error);
    }
})