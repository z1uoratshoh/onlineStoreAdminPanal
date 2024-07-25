import React from 'react'

import img_1 from "../../../assets/images/forOther/div.MuiAvatar-root.png"
import img_2 from "../../../assets/images/forOther/Frame 560.png"

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TextField from '@mui/material/TextField';

const Baners = () => {
  return (
    <div>
      <div className='w-[115%] flex items-center justify-between'>

        <div>
          <h1 className='font-medium text-[20px]'>Main Sliders</h1>

          <div className='w-[460px] h-[120px] rounded-[4px] border-[2px] border-dashed grid text-center mt-[3%]'>
            <img className='m-auto' src={img_1} alt="" />
            <h1 className='font-bold text-[16px]'>Click to upload or drag and drop</h1>
            <h1 className='text-[grey] text-[10px]'>(SVG, JPG, PNG, or gif maximum 900x400)</h1>
          </div>
        </div>

        <div>
          <h1 className='font-medium text-[20px] '>Baners</h1>

          <div className='w-[460px] h-[120px] rounded-[4px] border-[2px] border-dashed grid text-center mt-[3%]'>
            <img className='m-auto' src={img_1} alt="" />
            <h1 className='font-bold text-[16px]'>Click to upload or drag and drop</h1>
            <h1 className='text-[grey] text-[10px]'>(SVG, JPG, PNG, or gif maximum 900x400)</h1>
          </div>
        </div>


      </div>

      <div className='w-[115%] flex items-center justify-between mt-[3%]'>
        <table className='w-[460px] '>
          <thead className='w-[100%] h-[50px] bg-[grey] text-[white]'>
            <tr className=''>
                <td className='rounded-tl-[4px]'>
                  image
                </td>
                <td>
                  File name
                </td>
                <td className='rounded-tr-[4px]'>
                  Action
                </td>
            </tr>            
          </thead>
          <tbody>
            <tr className='border h-[50px] ' >
              <td className='w-[20%]'>
                <img src={img_2} alt=""  className='w-[50%]'/>
              </td>
              <td className='w-[65%] text-[15px] text-[grey]'>
                 Healthcare_Erbology.png
              </td>
              <td>
                <DeleteOutlineOutlinedIcon fontSize='small' sx={{color:"grey"}}/>
              </td>
            </tr>
            <tr className='border h-[50px] ' >
              <td className='w-[20%]'>
                <img src={img_2} alt=""  className='w-[50%]'/>
              </td>
              <td className='w-[65%] text-[15px] text-[grey]'>
                 Healthcare_Erbology.png
              </td>
              <td>
                <DeleteOutlineOutlinedIcon fontSize='small' sx={{color:"grey"}}/>
              </td>
            </tr>
            <tr className='border h-[50px] ' >
              <td className='w-[20%]'>
                <img src={img_2} alt=""  className='w-[50%]'/>
              </td>
              <td className='w-[65%] text-[15px] text-[grey]'>
                 Healthcare_Erbology.png
              </td>
              <td>
                <DeleteOutlineOutlinedIcon fontSize='small' sx={{color:"grey"}}/>
              </td>
            </tr>
          </tbody>
        </table>

        <table className='w-[460px] '>
          <thead className='w-[100%] h-[50px] bg-[grey] text-[white]'>
            <tr className=''>
                <td className='rounded-tl-[4px]'>
                  image
                </td>
                <td>
                  File name
                </td>
                <td className='rounded-tr-[4px]'>
                  Action
                </td>
            </tr>            
          </thead>
          <tbody>                        
            <tr className='border h-[50px] ' >
              <td className='w-[20%]'>
                <img src={img_1} alt=""  className='w-[50%]'/>
              </td>
              <td className='w-[65%] text-[15px] text-[grey]'>
                 Healthcare_Erbology.png
              </td>
              <td>
                <DeleteOutlineOutlinedIcon fontSize='small' sx={{color:"grey"}}/>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className='flex w-[115%] flex items-center justify-between pb-[6%]'>
        <div className='w-[460px] h-[250px] border-[2px] rounded-[4px] mt-[4%] grid p-[3%]'>
        <TextField id="outlined-basic" label="Subtitle" variant="outlined" />
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <div className='w-[100%] flex justify-end'>
          <button className='w-[120px] h-[37px] rounded-[4px] bg-[blue] text-[white]'>Save</button>
        </div>
        </div>

        <div className='w-[460px] h-[250px] border-[2px] rounded-[4px] mt-[4%] grid p-[3%]'>
        <TextField id="outlined-basic" label="Subtitle" variant="outlined" />
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <div className='w-[100%] flex justify-end'>
          <button className='w-[120px] h-[37px] rounded-[4px] bg-[blue] text-[white]'>Save</button>
        </div>
        </div>


      </div>



      




    </div>
  )
}

export default Baners
