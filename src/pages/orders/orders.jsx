import React, { useEffect } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getColor, getColors } from '../../api/order/order';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch()
  useEffect(() => {    
    dispatch(getColors())
  },[])

  const data = useSelector((state) => state.order.data2)
  console.log(data);

  const navigate = useNavigate()



  return (
    <div >
      <div className='w-[105%] h-[92vh] p-[2%] '>
        <nav className='flex items-center justify-between' >
          <h1 className='text-[25px] font-bold'>Orders</h1>
          <button onClick={() => navigate("/orderAdd")} className='w-[130px] h-[40px] bg-[blue] text-[white] rounded-[4px] '>
            + Add new
          </button>
        </nav>

      <section>
        <div className='flex items-center justify-between w-[95%] mt-[3%]'>
          <div className='flex items-center w-[40%] gap-[10px]'>
            <div className='w-[240px] h-[56px] border-[2px] rounded-[4px] flex items-center'>
              <input type="text" className='w-[85%] h-[100%] p-[5px]' placeholder='Search...'/>
              <SearchIcon/>
            </div>
            <div className='w-[170px]'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
            

          </div>

          <div className='flex gap-[10px]'>
            <div className='w-[40px] h-[40px] border-[2px] rounded-[4px] flex items-center justify-center'>
              <BorderColorOutlinedIcon sx={{color:"blue"}}/>
            </div>
            <div className='w-[40px] h-[40px] border-[2px] rounded-[4px] flex items-center justify-center '>
              <DeleteOutlineOutlinedIcon sx={{color:"blue"}}/>
            </div>

          </div>
        </div>
      </section>






        <section>
          <div>
            <table className='w-[1140px]  mt-[3%]'>
              <thead className='text-[grey] border-b-[2px]'>
                <tr>
                  <td>
                    Order
                  </td>
                  <td>
                    Date
                  </td>
                  <td>
                    Costumer
                  </td>
                  <td>
                    Payment System
                  </td>
                  <td>
                    Order status
                  </td>
                  <td>
                    Total
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  data?.map((elem , id) => {
                    return (
                      <tr key={id} className='w-[100%] h-[60px]'>
                        <td className='flex items-center gap-[10px] p-[14px]'>
                          <input type="checkbox"  />
                          <h1>#{elem.userId.slice(0,7)}</h1>
                        </td>
                        <td>
                          <h1>{elem.dob}</h1>
                        </td>
                        <td >
                          <h1>
                            {elem.userName} 
                            {elem?.userRoles?.[0].name}
                          </h1>
                        </td>
                        <td>
                          {elem?.lastName ? 
                          <div className='w-[80px] h-[30px] rounded-[4px] text-[green] bg-[#C4F8E2] text-center'>
                            Paid
                          </div>
                          : <div className='w-[100px] h-[30px] rounded-[4px] text-[grey] bg-[#E6E9F4] text-center'>
                            Panding
                          </div>  
                        }
                        </td>
                        <td>
                        {elem?.userRoles.length != 1 ? 
                          <div className='w-[80px] h-[30px] rounded-[4px] text-[white] bg-[#5A607F] text-center'>
                            Paid
                          </div>
                          : <div className='w-[100px] h-[30px] rounded-[4px] text-[white] bg-[#F99600] text-center'>
                            Panding
                          </div>  
                        }
                        </td>
                        <td>
                          <h1>
                            $ {elem.userId.slice(0,2)} ,14
                          </h1>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </section>



      </div>
    </div>
  )
}

export default Orders


// {
//   "userName": "yoska",
//   "userId": "0529013a-790e-4fa5-a699-76f9aad3f319",
//   "image": "",
//   "userRoles": [
//       {
//           "id": "88c66aa2-e395-49a8-a925-b8e82d7173f1",
//           "name": "User"
//       }
//   ],
//   "firstName": "",
//   "lastName": "",
//   "email": "",
//   "phoneNumber": "",
//   "dob": "0001-01-01"
// }
