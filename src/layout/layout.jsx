import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import "./style.css"

import logoImg from "../assets/images/forLoading/Group 1116606595.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useDispatch } from 'react-redux';
import { destroyToken } from '../utils/token';

const Layout = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const params = useLocation()  
  console.log(params.pathname);  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [dialState , setDialState] = useState(false)


  return (
    <div>
        <nav className='w-[100%] h-[65px] bg-[#1C2536] fixed z-[10] pl-[20px] xs:pl-[8px] xs:pr-[8px] flex items-center'>
          <aside onClick={() => setDialState(!dialState)} className='w-[250px] xs:w-[100px]'>
            <img src={logoImg} alt="" />
          </aside>

           <div className='w-[63%] xs:w-[40%]  h-[30px]  flex items-center xs:mx-[5%]'>
            <SearchIcon sx={{color:"white"}}/>
            <input className='bg-[#ffffff00] ml-[10px] text-[white] w-[100%] h-[100%]' type="text" placeholder='Search' />
           </div>

           <div className='mx-[1%] xs:mx-[3%]'>
            <div className='w-[17px] h-[17px] ml-[13px] mt-[-5px] bg-[#1E5EFF] absolute rounded-[50%] text-[white] text-[13px] flex items-center justify-center'>5</div>
            <NotificationsIcon sx={{color:"white"}}/>                     
           </div>

           <div className='w-[35px] h-[35px] xs:hidden xs:w-[25px] xs:h-[25px] mx-[1%] rounded-[50%] text-[white] text-[16px] flex items-center justify-center bg-[#1FD286]'>
              <h1>J</h1>            
           </div> 

           <div className='hidden  xs:block items-center '>
           <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{color:"white"}}
          >
            <div className='w-[35px] h-[35px] xs:w-[25px] xs:h-[25px] mx-[1%] rounded-[50%] text-[white] text-[16px] flex items-center justify-center bg-[#1FD286]'>
              <h1>J</h1>            
           </div> 
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => {destroyToken(), navigate("/login")}}>Logout</MenuItem>
          </Menu>         
           </div>


           <div className='xs:hidden flex items-center '>
           <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{color:"white"}}
          >
            J Ziuorat 
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => {destroyToken(), navigate("/login")}}>Logout</MenuItem>
          </Menu>
          <KeyboardArrowDownIcon sx={{color:"white"}}/>
           </div>
            
        </nav>
        <div className='w-[100%] h-[65px]'></div>

        <section >
          <div className='flex items-center '>
            {dialState ? <div className='w-[250px] h-[100vh] fixed z-[5] bg-[#1C2536]  px-[10px] pt-[60px] xs:pt-[40px]  dial_1   xs:ml-[0px]'>

{params.pathname == "/" ?
              <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
                <HomeOutlinedIcon sx={{color:"#5A607F"}}/>
                <h1>Deshboard</h1>
              </div>
              :<Link to={"/"}>
              <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
              <HomeOutlinedIcon sx={{color:"white"}}/>
              <h1>Deshboard</h1>
              </div> 
              </Link>
              }

{params.pathname == "/orders" ?
              <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
              <FormatListBulletedOutlinedIcon sx={{color:"#5A607F"}}/>
              <h1>Orders</h1>
            </div>
            :<Link to={"/orders"}>
            <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
            <FormatListBulletedOutlinedIcon sx={{color:"white"}}/>
            <h1>Orders</h1>
            </div>
            </Link>
            }

{params.pathname == "/products" ?
              <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
              <LocalOfferOutlinedIcon sx={{color:"#5A607F"}}/>
              <h1>Products</h1>
            </div>
            :<Link to={"/products"}>
              <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
            <LocalOfferOutlinedIcon sx={{color:"white"}}/>
            <h1>Products</h1>
            </div>
            </Link>
            }

{params.pathname == "/others" ?
             <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
             <FolderOutlinedIcon sx={{color:"#5A607F"}}/>
             <h1>Other</h1>
             </div>
             :  <Link to={"/others"}>
             <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
             <FolderOutlinedIcon sx={{color:"white"}}/>
             <h1>Other</h1>
             </div>
             </Link>
            }
            </div>
            
          :<div className='w-[250px] h-[100vh] fixed z-[5] bg-[#1C2536]  px-[10px] pt-[60px] xs:pt-[40px]  dial_1   xs:ml-[-250px]'>

          {params.pathname == "/" ?
                        <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
                          <HomeOutlinedIcon sx={{color:"#5A607F"}}/>
                          <h1>Deshboard</h1>
                        </div>
                        :<Link to={"/"}>
                        <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
                        <HomeOutlinedIcon sx={{color:"white"}}/>
                        <h1>Deshboard</h1>
                        </div> 
                        </Link>
                        }
          
          {params.pathname == "/orders" ?
                        <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
                        <FormatListBulletedOutlinedIcon sx={{color:"#5A607F"}}/>
                        <h1>Orders</h1>
                      </div>
                      :<Link to={"/orders"}>
                      <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
                      <FormatListBulletedOutlinedIcon sx={{color:"white"}}/>
                      <h1>Orders</h1>
                      </div>
                      </Link>
                      }
          
          {params.pathname == "/products" ?
                        <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
                        <LocalOfferOutlinedIcon sx={{color:"#5A607F"}}/>
                        <h1>Products</h1>
                      </div>
                      :<Link to={"/products"}>
                        <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
                      <LocalOfferOutlinedIcon sx={{color:"white"}}/>
                      <h1>Products</h1>
                      </div>
                      </Link>
                      }
          
          {params.pathname == "/others" ?
                       <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[white] flex items-center justify-start gap-[14px] px-[10px] text-[#5A607F]'>
                       <FolderOutlinedIcon sx={{color:"#5A607F"}}/>
                       <h1>Other</h1>
                       </div>
                       :<Link to={"/others"}>
                       <div className='w-[220px] h-[40px] my-[10px] rounded-[5px] bg-[#1C2536] flex items-center justify-start gap-[14px] px-[10px] text-[white]'>
                       <FolderOutlinedIcon sx={{color:"white"}}/>
                       <h1>Other</h1>
                       </div>
                       </Link>
                      }
          </div>    
          }
              
            <div className='w-[250px] h-[92vh] xs:hidden'></div>        

            <div>
              <Outlet/>
            </div>
          </div>
        </section>

      
    </div>
  )
}

export default Layout

