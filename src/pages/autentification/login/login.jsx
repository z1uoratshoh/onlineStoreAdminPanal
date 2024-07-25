import React, { useEffect, useState } from "react"
import "./style.css"
import logoImg from "../../../assets/images/forLogIn/Group 1116606595-2.png"

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { LoginAsync } from "../../../api/autentification/login/login";
import { useDispatch } from "react-redux";


export default function Login () {   
    
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const [name , setName] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate() 

    const dispatch = useDispatch()

    const token = localStorage.getItem("access_token")

    const loginTo = (obj) =>{
        dispatch(LoginAsync(obj))                       
    }

    const logToH = () => {
      if(token != ""){
        navigate("/")                       
      }
      else alert("Ошибка входа !")
    }

   
    
    return (
   
        <div>
            <div className="flex items-center jistify-between">
                <div className="div_1 w-[50%] xs:w-[100%] xs:grid h-[100vh] bg-[#1C2536] flex items-center justify-center">                    
                    <aside className="w-[80%] xs:m-auto">
                        <h1 className="text-[30px] xs:text-center  text-[white] lm:text-[18px]">Welcome to Admin panel</h1>
                        <img className="lm:w-[80%]" src={logoImg} alt="" />
                    </aside>

                    <div className="hidden  xs:m-auto xs:h-[300px] lm:w-[330px] md:w-[260px] h-[320px] rounded-[5px]  xs:grid mb-[10%]">                   
                    <h1 className="text-[24px] font-bold text-[white]">Log in</h1>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} className="lm:w-[330px]  md:w-[260px]" id="outlined-basic" sx={{color:"white"}} label="Email" variant="outlined" />
                        <FormControl  className="lm:w-[330px]  md:w-[260px]"   variant="outlined">
                        <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput                          
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}  
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}                        
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"/>
                        </FormControl>

                        <button onClick={() => navigate("/forgotPassword")} className="w-[100%] h-[27px] text-[#2563EB] font-medium ">Forgot password?</button>

                        <button onClick={() => loginTo({"userName" : name , "password" : password})} type="submit" className="w-[100%] h-[50px] text-[white] bg-[#2563EB] rounded-[4px] font-medium "><span onClick={() => logToH()} className="m-[7px]">Log in</span></button>                                           
                    </div>

                </div> 

                <div className="w-[50%] h-[100vh] flex items-center justify-center xs:hidden">
                    <div className="w-[402px] lm:w-[330px] md:w-[260px] h-[320px] rounded-[5px]  grid mb-[10%]">
                                                
                        <h1 className="text-[24px] font-bold">Log in</h1>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} className="lm:w-[330px]  md:w-[260px]" id="outlined-basic" label="Email" variant="outlined" />
                        <FormControl  className="lm:w-[330px]  md:w-[260px]"   variant="outlined">
                        <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput                          
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}  
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}                        
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"/>
                        </FormControl>

                        <button onClick={() => navigate("/forgotPassword")} className="w-[100%] h-[27px] text-[#2563EB] font-medium ">Forgot password?</button>

                        <button onClick={() => loginTo({"userName" : name , "password" : password})} type="submit" className="w-[100%] h-[50px] text-[white] bg-[#2563EB] rounded-[4px] font-medium "><span onClick={() => logToH()} className="m-[7px]">Log in</span></button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}