import React from 'react'
import TimeElements from './TimeElements'

import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
// import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Timeimg from "../../../assets/Images/TimelineImage.png"

const TimeLine = () => {
    const timearr=[
        {
            heading:"Leadership",
            subheading:"Fully committed to the success company",
            imag_file:logo1
    },
    {
        heading:"Responsibility",
        subheading:"Students will always be our top priority",
        imag_file:logo2
},
{
    heading:"Flexibility",
    subheading:"The ability to switch is an important skills",
    imag_file:logo3
},
{
    heading:"Solve the problem ",
    subheading:"Code your way to a solution",
    imag_file:logo4
},
    
]
  return (
    <div className='flex md:flex-row  flex-col gap-5  items-center mt-11'>
    <div className='md:w-[40%] flex flex-col  gap-10'>
    {
   timearr.map(item=>{
     return <TimeElements heading={item.heading} subheading={item.subheading} img_file={item.imag_file} ></TimeElements>
   })
    }
      
    </div>
    <div className=' border border-black  relative shadow-xl shadow-blue-300'>
    <div className='w-[40%] h-[8%] flex items-center justify-center bg-caribbeangreen-500  absolute bottom-[-10px] left-[30%]  '>
        <div className='flex  flex-row items-center justify-center text-white text-lg '>
            <span className=' font-bold text-xl'>10 + </span> instructors
        </div>
     </div>
     <img src={Timeimg} />

    </div>
    
    </div>
  )
}

export default TimeLine