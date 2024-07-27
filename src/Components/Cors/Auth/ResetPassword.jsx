import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa"
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../../service/operations/authAPI';
const ResetPassword = () => {
    const Location=useLocation()
    const dispatch=useDispatch()
   const{loading}=useSelector(state=>state.auth)
   const [fomrdata,setformdata]=useState({
        password:" ",
        conformpassword:" "
    })
    const{password,conformpassword}=fomrdata
    const [Newvissble,setNewVissible]=useState(false)
    const [Convissible,setConvissible]=useState(false)
    const handlefun=(e)=>{
        // console.log('Before update:', typeof ([e.target.name]), typeof([e.target.name]));
    setformdata(prevdata=>{
 
        return {
            ...prevdata,
            [e.target.name]:e.target.value
            
        }
    })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(password)
        console.log(conformpassword)
        console.log(fomrdata)
        if(password!==conformpassword){
            toast.error("Password does not match ")
            return
        }
         const token=Location.pathname.split('/').at(-1)
           dispatch(resetPassword(password,conformpassword,token))
        console.log(fomrdata)
        setformdata({
            password:"",
            conformpassword:""
        })
    }

  return (
    <div className='flex  items-center justify-center  w-full md:w-11/12 mt-24 mx-auto'>
    {
        loading?(<div></div>): <div className='flex flex-col items-start gap-11 p-6 '>
    {/* data and divs  */}
    <div className='flex flex-col items-start gap-3'>
     <div className='text-xl md:text-3xl font-inter text-[#F1F2FF]  '>Change Password</div>
     <p className='md:text-lg text-xs  text-[#AFB2BF]'>Almost done. Enter your new password and youre all set.</p>
    </div>
    {/* form */}
      <form onSubmit={handleSubmit} className=' flex flex-col items-start gap-4 w-full  '>
        <label className='relative w-full'>
        <p className="mb-1 text-lg font-mono leading-[1.375rem] text-[#F1F2FF]">New Password  <span className=' text-sm text-[#EF476F] '>*</span></p> 
        <input
        required
        type={Newvissble?"text":"password"}
        placeholder='New Password'
        name='password'
        value={password}
        onChange={handlefun}
        className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'>
         
        </input>
        <span  onClick={()=>setNewVissible(prev=>!prev)} className=' absolute  right-5 bottom-3 hover:cursor-pointer'>
           {
            Newvissble?<FaEyeSlash color='white' size={20}/>:<FaEye color='white' size={20}/>
           }
            </span>
        </label>

        {/* another label */}
        <label className='relative w-full '>
        <p className="text-lg text-[#F1F2FF] font-inter ">Conform New Password<span className=' text-sm text-[#EF476F] '>*</span></p> 
        <input
        required
        type={Convissible?"text":"password"}
        placeholder='New Password'
        name='conformpassword'
        value={conformpassword}
        onChange={handlefun}
        className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'>
          
        </input>
       
            <div onClick={()=>setConvissible(!Convissible)} className=' absolute  right-5 bottom-3 hover:cursor-pointer'>
           {
            Convissible?<FaEyeSlash color='white' size={20}/>:<FaEye color='white' size={20}/>
           }
            </div>

          
        </label>
           
          <button className='p-3 bg-[#FFD60A] text-[#000814] text-lg md:text-lg mt-12 w-full rounded-md' type='submit'>Reset Password</button>
      </form>

             {/* back to login page */}
      <Link to={"/login"} className='flex items-start gap-5'>
       <FaArrowCircleLeft color='white' size={20}/>
       <div className=' text-richblack-5 text-xs'>Back to login</div>
    </Link>
    </div>
    }
   
  
  

    </div>
  )
}

export default ResetPassword