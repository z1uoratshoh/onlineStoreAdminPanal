import React from "react"
import "./style.css"
import logoImg from "../../../assets/images/forLogIn/Group 1116606595-2.png"

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function ForgotPassword_1 () {   
    
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
                          <span onClick={() => navigate("/login")}> <KeyboardBackspaceIcon sx={{color:"white"}}/></span>                          
                          <h1 className="text-[24px] font-bold xs:text-[white]">Log in</h1>
                        </div>                      
                        <h1 className="text-[24px] font-bold xs:text-[white]">Forgot password</h1>  
                        <TextField className="lm:w-[330px]  md:w-[260px] xs:text-[white]" id="outlined-basic" label="Email" variant="outlined" />                        
                        

                        <button onClick={() => {navigate("/forgotPasswords"), alert("Name: ehson , password: 2007")}} className="w-[100%] h-[50px] text-[white] bg-[#2563EB] rounded-[4px] font-medium ">Send reset link</button>
                    </div>

                </div> 

                <div className="w-[50%] h-[100vh] flex items-center justify-center xs:hidden">
                    <div className="w-[402px] lm:w-[330px] md:w-[260px] h-[320px] rounded-[5px]  grid mb-[10%]">
                        <div className="flex items-center gap-[10px]" >
                          <span onClick={() => navigate("/login")}><KeyboardBackspaceIcon/></span> 
                          <h1 className="text-[20px] font-medium xs:text-[white]">Log in</h1>
                        </div>     
                        <h1 className="text-[24px] font-bold xs:text-[white]">Forgot password</h1>
                        <TextField className="lm:w-[330px]  md:w-[260px]" id="outlined-basic" label="Email" variant="outlined" />                                               

                        <button onClick={() => {navigate("/forgotPasswords"), alert("Name: ehson , password: 2007")}} className="w-[100%] h-[50px] text-[white] bg-[#2563EB] rounded-[4px] font-medium ">Send reset link</button>
                    </div>
                </div>
            </div>
        </div>
    )
}