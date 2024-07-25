import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCotegory, getCotegories, postCotegory, putCotegory } from '../../../api/other/cotegories/cotegories';
import SkeletonColor from '../../../components/skeleton/skeleton';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import imgF from "../../../assets/images/forOther/Pagination.png"


// Mui materiala / Dialog

import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Cotegories = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCotegories())
    },[])

    const data = useSelector((state) => state.cotegories.data)
    const scleton = useSelector((state) => state.cotegories.scleton)    

    const imgApi = import.meta.env.VITE_APP_FILES_URL



    // ? Mui Materials / Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [creatName , setCreatName] = useState('') 
    const [creatImg , setCreatImg] = useState(null)  
    const [prevuImg , setPrevuImg] = useState(null)  


    const handleFileChange = (event) => {
        const file = event.target.files[0];        
        setCreatImg(file);  
        const reader = new FileReader();
        reader.onload = (e) => {
            setPrevuImg(e.target.result);
        };
        reader.readAsDataURL(file);      
    };
    






    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose2 = () => {
      setOpen2(false);
    };

    const [creatName2 , setCreatName2] = useState('') 
    const [creatImg2 , setCreatImg2] = useState(null)   
    const [prevuImg2 , setPrevuImg2] = useState(null)   
    const [prevuImgOld , setPrevuImgOld] = useState("") 
    const [idx , setIdx] = useState('')
    console.log(idx);

    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        setCreatImg2(file);  
        const imgEdit = new FileReader()
        imgEdit.onload = (e) => {
            setPrevuImg2(e.target.result)
        }
        imgEdit.readAsDataURL(file)
    };
    


   








  return (
    <div className='w-[100%] h-[78vh] '>         

            <button onClick={() => handleClickOpen()} className='w-[130px] h-[40px] bg-[#2563EB] absolute ml-[68%] mt-[-5.5%] text-[white] rounded-[4px]'>
            + Add new            
            </button>
            
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"                  
      >
        <DialogTitle className='w-[500px] flex items-center justify-between' id="alert-dialog-title">
          {"Add cotegory"}
          <span onClick={() => handleClose()}><ClearIcon/></span>
        </DialogTitle>
        <input value={creatName} onChange={(e) => setCreatName(e.target.value)} type="text" className='w-[90%] m-auto h-[40px] rounded-[4px] border p-[2%]'  placeholder='Cotegory name...' />
        <div className='w-[90%] h-[100px] m-auto border-[2px] rounded-[4px] border-dashed my-[10px]' >
            <input type="file" onChange={handleFileChange} className='m-auto w-[70%]'/>
        </div>
        {prevuImg && (
        <div>
          <h3>File Preview:</h3>
          <img src={prevuImg} alt="Preview" className='w-[100%]' />
        </div>
      )}
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>Cancel</Button>
          <Button onClick={() => dispatch(postCotegory({name : creatName , img : creatImg}))} autoFocus variant='contained'>
            Creat
          </Button>
        </DialogActions>
            </Dialog>

            <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"                  
      >
        <DialogTitle className='w-[500px] flex items-center justify-between' id="alert-dialog-title">
          {"Add cotegory"}
          <span onClick={() => handleClose2()}><ClearIcon/></span>
        </DialogTitle>
        <input value={creatName2} onChange={(e) => setCreatName2(e.target.value)} type="text" className='w-[90%] m-auto h-[40px] rounded-[4px] border p-[2%]'  placeholder='Cotegory name...' />
        
        <div className='flex items-center'>

        <div className='w-[45%] h-[300px] m-auto border-[2px] rounded-[4px] border-dashed my-[10px]' >
            <img src={imgApi + prevuImgOld} alt="" />
        </div>


        <div className='w-[45%] h-[300px] m-auto border-[2px] rounded-[4px] border-dashed my-[10px]' >
            <input  type="file" onChange={handleFileChange2} className='m-auto w-[70%]'/>
            {prevuImg2 && (
        <div>
          <h3>File Preview:</h3>
          <img src={prevuImg2} alt="Preview" className='w-[100%]' />
        </div>
      )}
        </div>

        

        </div>
        
        
       
        <DialogActions>
          <Button onClick={() =>  {handleClose2() , setPrevuImg2(null)}} variant='outlined'>Cancel</Button>
          <Button onClick={() => {dispatch(putCotegory({name : creatName2 , img : creatImg2 , id : idx})) , handleClose2() , setPrevuImg2(null)}} autoFocus variant='contained'>
            Creat
          </Button>
        </DialogActions>
            </Dialog>

            <nav>
                <div className='w-[280px] rounded-[3px] h-[40px] flex items-center bg-[white] mt-[3%] border'>
                    <input type="search" className='w-[88%] rounded-[3px] h-[100%] p-[5px] '  placeholder='Search...'/>
                    <SearchIcon sx={{color:"grey"}}/>
                </div>
            </nav>

            <section>
                {scleton ? 
                <div className='w-[130%] m-auto mt-[5%] items-center grid grid-cols-5 gap-[10px]  '>
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />   
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />
                    <SkeletonColor />        
                </div>
                : <div className='w-[120%]  mt-[5%] grid grid-cols-5 gap-[20px]'>                                                               
                {
                    data?.map((elem ,id) => {                        
                        return (
                            <div key={id} className='w-[180px] h-[140px] border rounded-[3px] flex '>
                                <div className='w-[60%] h-[100%] grid p-[7%]'>
                                    <img className='w-[50%]' src={imgApi + elem.categoryImage} alt="" />
                                    <h1>{elem.categoryName}</h1>
                                </div>
                                <div className='w-[40%] h-[100%] grid p-[1%]'>
                                    <button onClick={() => {handleClickOpen2(true) , setCreatName2(elem.categoryName) , setPrevuImgOld(elem.categoryImage), setIdx(elem.id)}}><BorderColorIcon sx={{color:'#2563EB'}}/></button>
                                    <button onClick={() => dispatch(deleteCotegory(elem.id))}><DeleteIcon sx={{color:'#2563EB'}}/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>}
                
            </section>


            <footer className='w-[95%] mt-[5%] flex items-center justify-between pb-[5%]'>
                <img src={imgF} alt="" />
                <h1 className='text-[grey]'>{data?.length} Results</h1>
            </footer>
         
    </div>
  )
}

export default Cotegories
