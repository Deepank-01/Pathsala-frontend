import React, { useEffect } from 'react'
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { signUp } from '../service/operations/authAPI';
const Verifyemail = () => {
  const [otp, setOtp] = useState('');
  const{ signupData,loading}=useSelector(state=>state.auth)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  // console.log(otp)
    // useEffect(()=>{
    //      if(!signupData){
    //       toast.error("Fill the details first ")
    //       navigate("/signup")
    //      }
    // },[])
  const submitHandler=()=>{
    const { firstName,lastName,email,password, accountType}=signupData
    dispatch(signUp(accountType,firstName,lastName,email,password,otp,navigate))
    setOtp(" ")
  }
  return (
    <>
    {
      loading ?(<div></div>): <div className='w-11/12 md:w-[50%] mx-auto  flex flex-col items-start  gap-7 mt-36 '>
       <div className='flex flex-col items-start gap-3'>
     <div className='text-xl md:text-3xl font-inter text-[#F1F2FF]  '>Verify Email</div>
     <p className='md:text-lg text-xs  text-[#AFB2BF]'>Verifcation opt has been send on your email.  Enter the opt here</p>
    </div>
    {/* opt */}
    <form className=' flex flex-col gap-3 w-[100%] ' onSubmit={submitHandler} >

    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      
      renderSeparator={<span className=' text-richblack-5'> - </span>}
      renderInput={(props) => <input {...props} 
      className=" bg-richblack-800 text-white mx-auto  text-xl rounded-md  "
      />}
    />
    
    <button className='p-3 bg-[#FFD60A] text-[#000814] text-lg  md:text-xs mt-12  w-full md:w-[20%] rounded-md' type='submit'>
        Verify Email
    </button>
    </form>
    </div>
    }
   
    </>
  )
}

export default Verifyemail