import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBrend, deleteBrend, getBrends, putBrend } from '../../../api/other/brends/brends'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CloseIcon from '@mui/icons-material/Close';

// MUI materil / dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Brends = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBrends())
  },[])

  const data = useSelector((state) => state.brends.data)
  console.log(data);

  // MUI material / Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name , setName] = useState('')
  const [idx , setIdx] = useState(null)

  const [creatBrend , setcreatBrend] = useState('')

 

  return (
    <div className='w-[125%] '>
      <div className='w-[400px] '>
        <nav className='w-[100%] flex items-center justify-between text-[grey]'>
          <h1>Brands</h1>
          <h1>Action</h1>
        </nav>

      </div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='w-[400px] flex justify-between'>
          {"Edit Brend Name"}
          <span onClick={() =>handleClose()}><CloseIcon sx={{color:"grey"}}/></span>
        </DialogTitle>
        <DialogContent>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='w-[100%] m-auto h-[40px] border-[2px] rounded-[4px] p-[2%]' />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {dispatch(putBrend({name : name , id : idx})),handleClose()}} autoFocus>
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      <section className='w-[100%]  flex items-start justify-between'>
        <table className='w-[400px]'>
          <tbody>
            {data?.map((elem , id) =>{              
              return (
                <tr key={id} className='h-[50px] border-b'>
                  <td className='w-[80%]'>{elem.brandName}</td>
                  <td onClick={() => {handleClickOpen() , setName(elem.brandName) , setIdx(elem.id)}}><BorderColorOutlinedIcon sx={{color:'blue'}}/></td>
                  <td onClick={() => dispatch(deleteBrend(elem.id))}><DeleteOutlineOutlinedIcon sx={{color:'red'}}/></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      

      <section>
        <div className='border w-[500px] h-[240px] rounded-[4px] p-[5%] grid' >
          <h1 className='text-[20px] font-medium'>Add new brend</h1>

          <input value={creatBrend} onChange={(e) => setcreatBrend(e.target.value)} type="text" className='w-[100%] h-[40px] border-[2px] rounded-[4px] p-[2%]' placeholder='Brand name...' />

          <div className='w-[100%] flex justify-end'>
            <button onClick={() => dispatch(addBrend(creatBrend))} className='w-[120px] h-[40px] rounded-[4px] text-[white] bg-[#2563EB]' >Creat</button>
          </div>
        </div>
      </section>

      </section>


    </div>
  )
}

export default Brends
