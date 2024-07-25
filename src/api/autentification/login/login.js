import React from 'react'
import { useNavigate } from 'react-router-dom'
import { saveToken } from '../../../utils/token';
import { axiosRequest } from '../../../utils/axiosRequest';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const LoginAsync = createAsyncThunk("login/LoginAsync" , async (obj) =>{
    console.log(obj);
    try {
        const {data} = await axiosRequest.post("Account/login" , obj)
        saveToken(data?.data);
    } catch (error) {
        alert("Вы ввели неправельный пароль !")
    }
})