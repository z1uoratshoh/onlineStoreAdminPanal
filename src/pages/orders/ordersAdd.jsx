import React from 'react'
import img from "../../assets/images/forOther/receipt.png"
import { useLocation, useNavigate } from 'react-router-dom'

const OrdersAdd = () => {
    const navigate = useNavigate()

  return (
    <div className='p-[3%]'>
      <nav className='w-[1150px]'>
        <h1 className='text-[30px] font-bold'>Product</h1>
      </nav>

      <div className='w-[100%] h-[78vh]  grid text-center py-[15%]'>

     <img src={img} className='m-auto' alt="" />

      <h1 className='text-[20px] font-bold'>No orders yet</h1>
      <p className='text-[grey] w-[60%] m-auto'>All the upcoming orders from your store will be visible in this page. You can add orders by yourself if you sell offline. </p>

      <button onClick={() => navigate("/productAdd")} className='m-auto w-[130px] h-[40px] bg-[blue] text-[white] rounded-[4px] '>
            + Add new
          </button>
      </div>
    </div>
  )
}

export default OrdersAdd
