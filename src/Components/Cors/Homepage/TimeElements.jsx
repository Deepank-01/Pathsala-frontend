import React from 'react'

const TimeElements = ({heading,subheading,img_file}) => {
  return (
    <div className='flex flex-row gap-6 items-center'>
    <div className='30% bg-white  rounded-xl'>
        <img src={img_file} className=''/>
    </div>
    <div className='flex flex-col gap-1'>
    <div className=' font-inter text-xl font-semibold'>{heading}</div>
    <div className='font-inter  text-sm'>{subheading}</div>
    </div>
    </div>
  )
}

export default TimeElements