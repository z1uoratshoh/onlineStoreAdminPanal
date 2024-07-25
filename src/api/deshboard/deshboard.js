import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


export const getProductsdesshboard = createAsyncThunk("deshboard/getProductsdesshboard" , async () =>{
    try {
        const {data} = await axiosRequest.get("Product/get-products")
        return data?.data
    } catch (error) {
        console.error(error);
    }
})

export const deleteProduct = createAsyncThunk("deshboard/deketeProduct" , async (id , {dispatch}) => {
    try {
        const {data} = await axiosRequest.delete("Product/delete-product?id=" + id)
        dispatch(getProductsdesshboard())
    } catch (error) {
        console.error(error);
    }
})