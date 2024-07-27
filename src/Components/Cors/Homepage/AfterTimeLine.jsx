import React from 'react'
import CABuuton from './CABuuton'
import img1 from "../../../assets/Images/Compare_with_others.png"
import img2 from "../../../assets/Images/Know_your_progress.png"
const AfterTimeLine = () => {
  return (
    <div className=' flex flex-col  items-center gap-5 mt-[100px] '>

    <div className='flex flex-col w-[60%] gap-4'>
    
    <div className=' text-2xl text-[#000814]'>Your swiss knife for <span className=' text-[#A5FECB]'>learning any language</span></div>
    <div className='text-sm font-inter   text-[#2C333F]'> Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
    </div>
       {/* images */}
       <div className='flex md:flex-row flex-col justify-center items-center'>
        <img src={img2} className='w-[50%] h-[50%]'></img>
        <img src={img1} className='w-[50%] h-[50%]'></img>
       </div>
    {/* button */}
    <CABuuton active={true} linkto={"/"}>Learn  More</CABuuton>

    </div>
  )
}

export default AfterTimeLine