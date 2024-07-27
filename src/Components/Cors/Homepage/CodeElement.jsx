import React from 'react'
import CABuuton from './CABuuton'
import { FaAlignRight, FaArrowRight } from 'react-icons/fa'

const CodeElement = ({heading,subheading,cabutton1,cabutton2}) => {
  return (
    <div className='w-[90%] md:w-[50%] flex flex-col justify-between md:gap-11 p-5   gap-5'>
      {heading}
      <div className=' text-richblack-300 font-bold  text-sm '>
        {subheading}
      </div>
      <div className='flex gap-11   items-center '>
      <CABuuton active={cabutton1.active}  linkto={cabutton1.linkto}>
          <div className='flex  gap-2  items-center'>
           {cabutton1.text}
           <FaArrowRight/>
          </div>
      </CABuuton>
      <CABuuton active={cabutton2.active} linkto={cabutton2.linkto}>
        {cabutton2.text}
      </CABuuton>

      </div>
    </div>
  )
}

export default CodeElement