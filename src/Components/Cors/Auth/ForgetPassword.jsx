import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaArrowCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { getforgotlink } from '../../../service/operations/authAPI'
const ForgetPassword = () => {
    const[emailsent,setemailsent]=useState(false)
    const[email,setemail]=useState("")
    const dispatch=useDispatch()
    const {loading}=useSelector(state=>state.auth)
    // const {loading}
    const handler=(event)=>{
        event.preventDefault()
        dispatch(getforgotlink(loading,setemailsent,email))
    }
  return (
    <>
    {loading?<div>Loading .....Please wait</div> :
        <div className='  w-full md:w-[50%] mx-auto  mt-28 flex flex-col  items-start justify-center  gap-14  p-4'>

<div>
    {  // emailsent is false then the reset password is shown 
        emailsent ? (
            <div className='flex  flex-col w-11/12 gap-4 items-start'>
          <div className=' font-inter text-[#F1F2FF] text-xl md:text-2xl '>Check Your Email</div>
          <div className=' font-medium  text-[#AFB2BF] text-sm  md:text-lg'>We have sent the reset email to your email account {email} </div>
        </div>
        ):(<div className='flex  flex-col w-11/12 gap-4 items-start'>
          <div className=' font-inter text-[#F1F2FF] text-xl md:text-2xl '>Reset your password</div>
          <div className=' font-medium  text-[#AFB2BF] text-sm'>Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery</div>
        </div>)
    }
    </div>

    <div className='flex items-start'>
     {
          emailsent?(<form onSubmit={handler} >
            <button className='w-full p-3 rounded-md text-[#000814] bg-yellow-25 mt-24' type='submit'>Reset Password</button> 
          </form>):(<form onSubmit={handler} className=''>

            <label className="">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                  placeholder="Enter email address"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
             </label>
             <button className='w-full md:w-[50%] p-3 rounded-md text-[#000814] bg-yellow-25  mt-11' type='submit'>Reset Password</button>
</form>)
     }
    </div>

    <Link to={"/login"} className='flex items-start gap-5'>
       <FaArrowCircleLeft color='white' size={20}/>
       <div className=' text-richblack-5 text-xs'>Back to login</div>
    </Link>

</div>
    }
    
    </>
  )
}

export default ForgetPassword