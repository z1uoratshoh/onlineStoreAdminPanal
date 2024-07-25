import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../utils/axiosRequest";


export const getCotegories = createAsyncThunk("category/getCotegories" , async () => {
    try {
        const {data} = await axiosRequest.get("Category/get-categories")
        return data?.data
    } catch (error) {
        console.error(error);
    }
})

export const postCotegory = createAsyncThunk("category/addCategory" , async (obj , {dispatch}) =>{
    const formData = new FormData()
    formData.append("CategoryImage" , obj.img)
    formData.append("CategoryName" , obj.name)
    console.log(formData);
    try {
        const {data} = await axiosRequest.post("Category/add-category" , formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        dispatch(getCotegories())
    } catch (error) {
        console.error(error);
    }
})

export const deleteCotegory = createAsyncThunk("category/delete-category" , async (id , {dispatch}) =>{
    try {
        const {data} = await axiosRequest.delete("Category/delete-category?id=" + id)
        dispatch(getCotegories())
    } catch (error) {
        console.error(error);
    }
})

export const putCotegory = createAsyncThunk("category/putCotegory" , async ( obj , {dispatch}) => {
    const formdata = new FormData()
    formdata.append("CategoryImage" , obj.img)
    formdata.append("CategoryName" , obj.name)
    formdata.append("Id" , obj.id)
    console.log(formdata);
    try {
        const {data} = await axiosRequest.put("Category/update-category" ,formdata , {
            headers : {
                "Content-Type ": "multipart/form-data"
            }
        })
        dispatch(getCotegories())
    } catch (error) {
        console.error(error);
    }
})