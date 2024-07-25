import React from "react"
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
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function ForgotPassword_2 () {   
    
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const navigate = useNavigate()
    
    return (
    //   '2xl': {'max': '1535px'},      
    //   'xl': {'max': '1279px'},
    //   'lg': {'max': '1023px'},
    //   'lm': {'max': '860px'},
    //   'md': {'max': '767px'},      
    //   'sm': {'max': '639px'},
    //   'sx': {'max': '580px'},
    //   'xs': {'max': '535px'},
        <div>
            <div className="flex items-center jistify-between">
                <div className="div_1 w-[50%] xs:w-[100%] xs:grid h-[100vh] bg-[#1C2536] flex items-center justify-center">                    
                    <aside className="w-[80%] xs:m-auto">
                        <h1 className="text-[30px] xs:text-center  text-[white] lm:text-[18px]">Welcome to Admin panel</h1>
                        <img className="lm:w-[80%]" src={logoImg} alt="" />
                    </aside>

                    <div className="hidden  xs:m-auto xs:h-[320px] lm:w-[330px] md:w-[260px] h-[320px] rounded-[5px]  xs:grid mb-[10%]">
                        <div className="flex items-center gap-[10px]" >
                          <span onClick={() => navigate("/forgotPassword")}><KeyboardBackspaceIcon sx={{color:'white'}}/></span> 
                          <h1 className="text-[20px] font-medium xs:text-[white]">Log in</h1>
                        </div>    
                        <h1 className="text-[24px] font-bold xs:text-[white]">Forgot password</h1>
                        <FormControl className="lm:w-[330px]  md:w-[260px]"  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
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
                        <FormControl className="lm:w-[330px]  md:w-[260px]"  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
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

                        <button className="w-[100%] h-[50px] text-[#2563EB] font-medium ">Forgot password?</button>

                        <button className="w-[100%] h-[50px] text-[white] bg-[#2563EB] rounded-[4px] font-medium ">Reset</button>
                    </div>

                </div> 

                <div className="w-[50%] h-[100vh] flex items-center justify-center xs:hidden">
                    <div className="w-[402px] lm:w-[330px] md:w-[260px] h-[320px] rounded-[5px]  grid mb-[10%]">
                        <div className="flex items-center gap-[10px]" >
                          <span onClick={() => navigate("/forgotPassword")}><KeyboardBackspaceIcon/></span> 
                          <h1 className="text-[20px] font-medium xs:text-[white]">Log in</h1>
                        </div>   
                        <h1 className="text-[24px] font-bold xs:text-[white]">Forgot password</h1> 

                        <FormControl className="lm:w-[330px]  md:w-[260px]"  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
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
                        <FormControl className="lm:w-[330px]  md:w-[260px]"  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
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

                        <button className="w-[100%] h-[50px] text-[white] bg-[#2563EB] rounded-[4px] font-medium ">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}