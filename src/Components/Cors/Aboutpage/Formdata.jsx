import React from 'react'
import Contactform from '../../Common/Contactform'

const Formdata = () => {
  return (
    <div className=' flex flex-col gap-6 items-center p-2 '>
    <div className='flex flex-col gap-2  items-center'>
     <p className=' text-xl md:text-3xl font-inter text-[#F1F2FF]'>Get in Touch</p>
     <span className=' text-xs md:text-sm text-[#838894] '>We'd love to here for you, Please fill out this form.</span>
    </div>
    <Contactform/>

    </div>
  )
}

export default Formdata