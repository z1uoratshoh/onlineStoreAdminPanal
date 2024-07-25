import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Other = () => {
  const location = useLocation()
  console.log(location.pathname);

  return (
    <div className='w-[100%] h-[90vh] pl-[4%]'>
      <div>
        <nav className='w-[100%]'>
          <div className='w-[340px] h-[60px] flex items-center justify-center  gap-[20px] '>
            {location.pathname == "/others" ? 
            <div className='w-[100px] h-[35px]  rounded-[3px] flex items-center justify-center bg-[#DBEAFE] text-[blue]' >Cotegories</div>
          :<Link className='w-[100px] h-[35px]  rounded-[3px] flex items-center justify-center  text-[blue]' to={"/others"}>Cotegories</Link>}
            {location.pathname == "/others/brends" ? 
            <div className='w-[100px] h-[35px]  rounded-[3px] flex items-center justify-center bg-[#DBEAFE] text-[blue]'>Brends</div>
          :<Link className='w-[100px] h-[35px]  rounded-[3px] flex items-center justify-center  text-[blue]' to={"/others/brends"}>Brends</Link>}
            {location.pathname == "/others/baners" ? 
            <div className='w-[100px] h-[35px]  rounded-[3px] flex items-center justify-center bg-[#DBEAFE] text-[blue]'>Baners</div>
          :<Link className='w-[100px] h-[35px]  rounded-[3px] flex items-center justify-center  text-[blue]' to={"/others/baners"}>Baners</Link>}
          </div> 
          
        </nav>

        
         
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Other
