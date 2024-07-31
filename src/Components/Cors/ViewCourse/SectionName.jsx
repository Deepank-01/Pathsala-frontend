import React, { useState } from 'react'
import Slider from './Slider'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const SectionName = ({item}) => {
    const [activate,setactivate]=useState(false)
  return (
    <div className='flex flex-col relative items-start p-2'>
    <div className=' flex gap-2 w-full p-2 text-richblack-200 md:text-xl text-sm justify-evenly bg-richblack-800 rounded-md mt-2  hover:cursor-pointer transition-all duration-200 ' onClick={()=>setactivate(!activate)}>
    {item?.sectionName}
    {!activate ? <button ><IoMdArrowDropdown  size={20}/></button>:<button   ><IoMdArrowDropup size={20}/></button>}
    </div>
         <div className={`${activate ? (" block"):("hidden ")} w-full`}>
                {
                   item?.subSection?.length >0 ?(<Slider subSection={item?.subSection} />):"No Video "
                }
        </div>
    </div>
  )
}

export default SectionName