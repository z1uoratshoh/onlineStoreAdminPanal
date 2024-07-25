import React, { useEffect, useState } from 'react'

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import img_1 from "../../assets/images/forOther/div.ql-toolbar.png"
import { useDispatch, useSelector } from 'react-redux';
import { getColor } from '../../api/order/order';
import Color from '../../components/color/color';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../api/product/product';

const ProductAdd = () => {

  const [cotegories, setCotegories] = React.useState('');

  const handleChangeCotegories = (event) => {
    setCotegories(event.target.value);
  };

  // Brend id ------------------------------------>
  const [brends, setBrends] = React.useState('');
  console.log(brends);

  const [size , setSize] = useState("Size");
  const [waght , setWaght] = useState("Weight");

  const handleChangeBrends = (event) => {
    setBrends(event.target.value);
  };

  const [colors , setColosr] = useState(null)
  console.log(colors);


  const [chek , setChek] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColor())
  },[])

  const color = useSelector((state) => state.order.data)
  console.log(color);


  // Img ------------------------------------>
  const [img , setImg] = useState(null)
  const [imgPrevu , setPrevuImg] = useState(null)
  

  const imgSet = (event) => {
    setImg(event.target.files[0])
    const imgEdit = new FileReader()
    imgEdit.onload = (e) => {
      setPrevuImg(e.target.result)
    }
    imgEdit.readAsDataURL(event.target.files[0])
  }

  // Color id ------------------------------------>
  const [colores , setColores] = useState('')
  console.log(colores);

  // Product Name  ------------------------------------>
  const [name , setNAme] = useState('')
  const [description , setDescription] = useState('')
  const [code , setCode] = useState('')

  // Quntity  ------------------------------------>
  const [quantity , setQuantity] = useState('')

  // Weight Sizi  ------------------------------------>
  const [weight , setWeight] = useState('')
  const [sizes , setSizes] = useState('')

  // Price  ------------------------------------>
  const [price , setPrice] = useState('')


  const navigate = useNavigate()


  return (
    <div className='w-[1200px]'>
      <div className='w-[100%] h-[92vh] p-[3%]'>

        <nav className='flex items-center justify-between'>
          <div>
            <h1 className='text-[25px] font-bold'><span onClick={()=> navigate("/products")}><KeyboardBackspaceOutlinedIcon fontSize='large' sx={{color:"grey"}}/></span> Products / Add new</h1>
          </div>

          <div className='flex items-center gap-[20px]'>
          <button onClick={()=> navigate("/products")} className='m-auto w-[130px] h-[40px] border text-[blue] rounded-[4px] '>
            Cancele
          </button>
          <button onClick={() => {dispatch(addProduct({img:img , brendId : brends, colorId : colores , name : name , description: description , quant : quantity , w: weight , s: sizes , code : code , price : price , false:false , disPrice : "10", subID: "508"})) , navigate("/products")}} className='m-auto w-[130px] h-[40px] bg-[blue] text-[white] rounded-[4px] '>
            Save
          </button>
          </div>

        </nav>

        <div className='flex justify-between w-[100%] mt-[2%]  h-[90vh]'>
          
          
          <section className='w-[60%] h-[100%] ' >

            <div>
              <nav>
                <h1 className='text-[18px] font-bold'>Information</h1>
              </nav>

              <header className='w-[100%] h-[60px] mt-[2%] flex justify-between'>
                <input value={name} onChange={(event) => setNAme(event.target.value)} type="text" placeholder='Product name' className='w-[500px] h-[50px] p-[2%] border-[2px] rounded-[4px]' />
                <input  value={code} onChange={(e) => setCode(e.target.value)} type="text" placeholder='Code' className='w-[160px] h-[50px]  border-[2px] p-[2%] rounded-[4px]' />
              </header>



              <div className='w-[100%] h-[40px] border-[2px] rounded-t-[6px] '>
                <img src={img_1} alt="" />
              </div>
              <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}  className='w-[100%] h-[170px] border p-[2%]' placeholder='Discription'/>

             <div className='flex w-[100%] justify-between mt-[5%]'>
             <FormControl className='w-[48%]'>
                <InputLabel id="demo-simple-select-label">Cotegories</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cotegories}
                  label="Cotegories"
                  onChange={handleChangeCotegories}
                >
                  <MenuItem value={10}>Iphone</MenuItem>
                  <MenuItem value={20}>Xiaomi</MenuItem>
                  <MenuItem value={30}>Samsung</MenuItem>
                  <MenuItem value={40}>Apple</MenuItem>
                  <MenuItem value={50}>IOS</MenuItem>
                </Select>
              </FormControl>

              <FormControl className='w-[48%] '>
                <InputLabel id="demo-simple-select-label">Brends</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={brends}
                  label="Cotegories"
                  onChange={handleChangeBrends}
                >
                  <MenuItem value={237}>Xiaomi</MenuItem>
                  <MenuItem value={241}>Sumsung</MenuItem>
                  <MenuItem value={233}>Windows1</MenuItem>
                  <MenuItem value={251}>apple</MenuItem>
                  <MenuItem value={253}>Macos</MenuItem>
                  <MenuItem value={255}>google</MenuItem>
                </Select>
              </FormControl>
             </div>

             <div className='mt-[5%]'>
              <nav>
                <h1 className='text-[18px] font-bold'>Price</h1>
              </nav>

              <div className='flex item-center justify-between mt-[2%]'>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder='Product price' className='w-[210px] h-[50px]  border-[2px] p-[2%] rounded-[4px]' />
                <input type="number" placeholder='Discount' className='w-[210px] h-[50px]  border-[2px] p-[2%] rounded-[4px]' />
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder='Cout' className='w-[210px] h-[50px]  border-[2px] p-[2%] rounded-[4px]' />
              </div>

              <div className='flex item-center justify-between mt-[2%] p-[2%] border-[2px] rounded-[4px]'>
                <div>
                  <h1 className='text-[19px] font-bold'>Diferent Options</h1>
                  <h1>This product has multiple options</h1>
                </div>
                <input type="checkbox" checked={chek}  onClick={() => setChek(!chek)}/>
              </div>


             </div>



             {chek == true ? <div className='flex w-[100%] justify-between mt-[5%] '>

              <div className='w-[47%]  h-[240px] grid'>
                <h1 className='text-[18px] font-bold'>Options</h1>

                <TextField id="standard-basic" value={size} className='w-[90%] mt-[20px]' label="Option1" variant="outlined" />

                <TextField id="standard-basic" value={waght} className='w-[90%] mt-[20px]' label="Option2" variant="outlined" />


                <TextField id="standard-basic" className='w-[90%] mt-[3%]' label="Option2" variant="outlined" />
              </div>



              <div className='w-[47%] pt-[6%] h-[240px] grid'>


                <TextField value={weight} onChange={(e) => setWeight(e.target.value)} id="standard-basic" className='w-[90%] mt-[3%]' label="value" variant="outlined" />
  
                <TextField value={sizes} onChange={(e) => setSizes(e.target.value)} id="standard-basic" className='w-[90%] mt-[3%] ' label="value" variant="outlined" />
                
                <TextField id="standard-basic" className='w-[90%] mt-[3%]' label="value" variant="outlined" />

              </div>

             </div>
             :null
             }
             








            </div>

          </section>








          <section className='w-[35%] h-[100%] '>

            {/* <input type="color" onChange={(e) => setColosr(e.target.value)}/> */}

            <div className='w-[100%] border-[2px] grid  rounded-[4px] h-[130px] p-[3%] ' >
              <nav className='w-[95%] m-auto flex iyems-center justify-between'  >
                <h1>Colour</h1>
                <button className='text-[blue]'>
                  + Creat new
                </button>
              </nav>

              <div className='flex items-center gap-[10px] bg-[]'>
                <div onClick={() => setColores(26)} className='w-[40px] h-[40px] rounded-[50%] bg-[white] border'></div>
                <div onClick={() => setColores(27)} className='w-[40px] h-[40px] rounded-[50%] bg-[yellow]'></div>
                <div onClick={() => setColores(28)} className='w-[40px] h-[40px] rounded-[50%] bg-[blue]'></div>
                <div onClick={() => setColores(29)} className='w-[40px] h-[40px] rounded-[50%] bg-[brown]'></div>
                <div onClick={() => setColores(31)} className='w-[40px] h-[40px] rounded-[50%] bg-[orange]'></div>
                <div onClick={() => setColores(33)} className='w-[40px] h-[40px] rounded-[50%] bg-[pink]'></div>         
                <div onClick={() => setColores(35)} className='w-[40px] h-[40px] rounded-[50%] bg-[silver]'></div>                
              </div>
              
            </div>


            <div className='border-[2px] rounded-[4px] grid mt-[6%] p-[3%]'>
              <h1 className='text-[20px] font-bold'>Tags</h1>

              <div className='flex justify-between'>
                <input type="text" className='w-[80%] h-[50px] border-[2px] rounded-[4px] p-[5px]' placeholder='Tags name' />
                <button className='w-[50px] h-[50px] border-[2px] rounded-[4px] border-[blue]'>
                  +
                </button>

              </div>

              <div className='w-[100%] flex flex-wrap gap-[10px] mt-[5%]'>
                <div className='w-[90px] h-[25px] bg-[#E6E9F4] rounded-[4px] text-center text-[grey] p-[1px]'>T-Shirt х</div>
                <div className='w-[130px] h-[25px] bg-[#E6E9F4] rounded-[4px] text-center text-[grey] p-[1px]'>Men Clothes x</div>
                <div className='w-[170px] h-[25px] bg-[#E6E9F4] rounded-[4px] text-center text-[grey] p-[1px]'>Summer Collection х</div>
              </div>

            </div>


            <div className='w-[100%] h-[200px] border-[2px] border-dashed mt-[5%]'>
              <input onChange={imgSet} type="file" name="" id=""/>
              <img className='w-[100%] mt-[5%]' src={imgPrevu} alt="" />
            </div>


          </section>
        </div>

      </div>
      
    </div>
  )
}

export default ProductAdd
