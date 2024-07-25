import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import { getProductsdesshboard } from "../deshboard/deshboard";


export const addProduct = createAsyncThunk("product/addProduct" , async (obj , {dispatch}) => {
    const formdata = new FormData()
    formdata.append("Images" , obj.img)
    formdata.append("BrandId" , obj.brendId)
    formdata.append("ColorId" , obj.colorId)
    formdata.append("ProductName" , obj.name)
    formdata.append("Description" , obj.description)
    formdata.append("Quantity" , obj.quant)
    formdata.append("Weight" , obj.w)
    formdata.append("Size" , obj.s)
    formdata.append("Code" , obj.code)
    formdata.append("Price" , obj.price)
    formdata.append("HasDiscount" , obj.false)
    formdata.append("DiscountPrice" , obj.disPrice)
    formdata.append("SubCategoryId" , obj.subID)

    try {
        const {data} = await axiosRequest.post("Product/add-product" , formdata , {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
        dispatch(getProductsdesshboard())
    } catch (error) {
        console.error(error);
    }

})