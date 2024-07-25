import React, { useEffect } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import imgF from "../../assets/images/forOther/Pagination.png"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getColor } from '../../api/order/order';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, getProductsdesshboard } from '../../api/deshboard/deshboard';

const Products = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsdesshboard())
  },[])

  const data = useSelector((state) => state.deshboard.data)
  console.log(data);

  const navigate = useNavigate()

  const imgAPI = import.meta.env.VITE_APP_FILES_URL   

  return (
    <div >
      <div className='w-[105%] h-[92vh] p-[2%] '>
        <nav className='flex items-center justify-between' >
          <h1 className='text-[25px] font-bold'>Products</h1>
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
                    Product
                  </td>
                  <td>
                    Inventory
                  </td>
                  <td>
                    Cotegory
                  </td>
                  <td>
                    Price
                  </td>
                  <td>
                    Action
                  </td>                  
                </tr>
              </thead>
              <tbody>
                {
                  data?.products?.map((elem , id) => {
                    return (
                      <tr key={id} className='w-[100%] h-[60px]'>
                        <td className='flex items-center gap-[10px] '>
                          <input type="checkbox"  />
                            <img className='w-[40px]' src={imgAPI + elem.image} alt="" />     
                            <h1>{elem.productName}</h1>                     
                        </td>
                        <td>
                          <h1>{elem.quantity } in stock</h1>
                        </td>
                        <td >
                          <h1>
                            {elem.productName}                            
                          </h1>
                        </td>                                                 
                        <td>
                          <h1>
                            $ {elem.price}
                          </h1>
                        </td>
                        <td className='flex gap-[10px]'>
                            <BorderColorOutlinedIcon sx={{color:"blue"}}/>
                            <span onClick={() => dispatch(deleteProduct(elem.id))}><DeleteOutlineOutlinedIcon sx={{color:"red"}}/></span>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </section>



            <footer className='w-[95%] mt-[5%] flex items-center justify-between pb-[5%]'>
                <img src={imgF} alt="" />
                <h1 className='text-[grey]'>{data?.products?.length} Results</h1>
            </footer>

      </div>
    </div>
  )
}

export default Products



// {
//   "id": 246,
//   "productName": "dbhsf",
//   "image": "fdcd060d-248a-45c6-b320-70da29d1300b.jpg",
//   "color": "blue",
//   "price": 56578,
//   "hasDiscount": true,
//   "discountPrice": 14141,
//   "quantity": 4152698,
//   "productInMyCart": true,
//   "productInfoFromCart": {
//       "id": 1125,
//       "quantity": 4
//   }
// }