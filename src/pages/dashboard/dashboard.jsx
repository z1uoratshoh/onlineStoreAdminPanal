import React, { useEffect } from 'react'
import MyLineChart from '../../components/grafic/grafic'

import img_1 from "../../assets/images/forDashboard/div.MuiBox-root.png"
import img_3 from "../../assets/images/forDashboard/div.MuiBox-root-2.png"
import img_2 from "../../assets/images/forDashboard/iconly-glass-discount.svg.png"
import EastIcon from '@mui/icons-material/East';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsdesshboard } from '../../api/deshboard/deshboard'


const Dashboard = () => {

  const arr_1 = [
    {
      id : 1,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 2,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 3,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 4,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 5,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 6,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 7,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 8,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 9,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 10,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 11,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
    {
      id : 12,
      img : img_1,
      name : "salom",
      lastName : "V salommm",
      price : 22.4,     
    },
  ]

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getProductsdesshboard())
  },[])

  const data = useSelector((state) => state.deshboard.data)
  console.log(data?.products);
  const imgApi = import.meta.env.VITE_APP_FILES_URL



  return (
    <div className='w-[100%] h-[92vh] p-[3%] '>
      <div >
        <nav>
          <h1 className='text-[25px] font-bold'>Dashboard</h1>
        </nav>
        
        
        <div className='flex items-center justify-around  xs:flex-wrap'>
          <div>
          <header className='flex items-center gap-[10px] my-[20px]  xs:w-[320px]'>
          <div className='w-[235px] xs:w-[150px] h-[84px] xs:h-[140px] bg-[#FEF3F2] rounded-[5px] flex xs:flex-wrap items-center justify-around px-[3%]' >
            <div>
              <img src={img_1} alt="" />
            </div>

            <div>
              <h1 className='text-[grey] xs:text-center'>Sales</h1>
              <h1 className='font-bold text-[24px]'>$152k</h1>
            </div>

          </div>

          <div className='w-[235px] xs:w-[150px] h-[84px] xs:h-[140px] bg-[#FFFAEB] rounded-[5px] flex xs:flex-wrap items-center justify-around px-[3%]' >
            <div>
              <img src={img_2} alt="" />
            </div>

            <div>
              <h1 className='text-[grey] xs:text-center'>Cost</h1>
              <h1 className='font-bold text-[24px]'>$99.7k</h1>
            </div>

          </div>

          <div className='w-[235px] xs:w-[150px] h-[84px] xs:h-[140px] bg-[#F0FDF9] rounded-[5px] flex xs:flex-wrap items-center justify-around px-[3%]' >
            <div>
              <img src={img_3} alt="" />
            </div>

            <div>
              <h1 className='text-[grey] xs:text-center'>Proit</h1>
              <h1 className='font-bold text-[24px]'>$32.1k</h1>
            </div>

          </div>
        </header>
        


        <div className='border-[1px] rounded-[5px] w-[726px] p-[1%] xs:w-[320px]   '>
          <h1 className='text-[16px] font-medium xs:p-[5%] xs:text-center'>Sales Revenue</h1>
          <MyLineChart/>
        </div>
          </div>

          <div className='w-[460px] xs:w-[320px] h-[500px] border ml-[3%] xs:ml-[0] mt-[20px]'>

          <aside className='w-[90%] flex items-center justify-between p-[10px]'>
            <h1 className='text-[18px] font-medium'>Top selling products</h1>
            <h1 className='text-[18px] font-medium'>See All <span><EastIcon fontSize='small'/></span> </h1>
          </aside>

          <div className='overflow-y-scroll h-[450px]'>
            {data?.products?.map((elem) => {
              return (
                <div className='w-[100%] h-[50px] flex items-center justify-between p-[3%] border' key={elem.id}>
                  <img className='w-[40px] rounded-[10px]' src={imgApi + elem.image} alt="" />

                  <div className='w-[60%]'>
                    <h1 className='font-black text-[14px]'>{elem.productName}</h1>
                    <h1 className='text-[10px] text-[grey]'>{elem.color}</h1>
                  </div>

                  <div>
                    <h1 className='text-[#10B981]'>{elem.price} $</h1>
                    <h1 className='text-[10px] text-[grey]'>in sales</h1>
                  </div>
                </div>
              )
            })}
          </div>
            


          </div>


        </div>

        <section>
          <div className='mt-[2%] pb-[3%] flex items-center justify-between w-[100%] xs:flex-wrap'>

            
          <div className=' w-[550px] xs:w-[320px] xs:mt-[10%] overflow-y-scroll h-[450px]'>
          <h1 className='text-[25px] font-bold'>Recent Transactions</h1>  
          <aside className='w-[90%] flex items-center justify-between p-[10px]'>            
            <aside className='w-[100%] flex items-center justify-between'>
            <h1 className='w-[130px]'>Name</h1>  
            <h1 className='w-[120px]'>Date</h1>
            <h1>Amount</h1>
            <h1>Status</h1>
            </aside>          
          </aside>
            {data?.products?.map((elem) => {
              return (
                <div className='w-[100%] h-[50px] flex items-center justify-between p-[3%] border' key={elem.id}>                  
                  <div className='w-[80px]'>
                    <h1 className='font-black text-[14px]'>{elem.productName}</h1>
                    
                  </div>
                  <h1>{elem.quantity}</h1>

                  <h1 className='text-[10px] text-[grey]'>{elem.color}</h1>

                  <div>
                    <h1 className='text-[#10B981]'>{elem.productInMyCart == true ? "true" : "false"} </h1>                    
                  </div>
                </div>
              )
            })}
          </div>


          <div className=' w-[550px] xs:w-[320px] xs:mt-[10%] overflow-y-scroll h-[450px]'>
            {data?.products?.map((elem) => {
              return (
                <div className='w-[100%] h-[50px] flex items-center justify-between p-[3%] border' key={elem.id}>
                  <img className='w-[40px] rounded-[10px]' src={imgApi + elem.image} alt="" />

                  <div>
                    <h1 className=''>{elem.price} $</h1>                    
                  </div>

                  <div className=''>
                    <h1 className='font-black text-[14px]'>{elem.productName}</h1>
                    <h1 className='text-[10px] text-[grey]'>{elem.color}</h1>
                  </div>

                 
                </div>
              )
            })}
          </div>


          </div>


        </section>

      </div>
    </div>
  )
}


//   {
//     "id": 246,
//     "productName": "dbhsf",
//     "image": "fdcd060d-248a-45c6-b320-70da29d1300b.jpg",
//     "color": "blue",
//     "price": 56578,
//     "hasDiscount": true,
//     "discountPrice": 14141,
//     "quantity": 4152698,
//     "productInMyCart": false,
//     "productInfoFromCart": null
// }
export default Dashboard
