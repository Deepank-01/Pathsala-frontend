import React from 'react'
import img1 from "../../../assets/Images/Instructor.png"
import CABuuton from './CABuuton'
const Instructor = () => {
  return (
    <div className='flex md:flex-row flex-col items-center  justify-evenly  gap-9 mt-[100px]'>

    <div className='relative md:w-[50%] '>
    {/* <div className='   w-[50%] md:h-[400px] bg-white'></div> */}
    <img  src={img1} className='md:h-[400px]  transition-all duration-200 hover:scale-105 hover:shadow-blue-100 hover:shadow-lg '/>
    </div>
    {/* content */}
    <div className='flex flex-col gap-5 md:w-[40%]  '>
    <div className='text-[#F1F2FF] md:text-4xl text-xl  '>Become <span className=' font-inter text-yellow-5'>Instructor</span></div>
    <div className='text-[#838894] '>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</div>
    <div className='md:w-[40%] mt-11' ><CABuuton active={true} linkto={"/signup"}>Start Now </CABuuton></div>
    </div>

    </div>
  )
}

export default Instructor