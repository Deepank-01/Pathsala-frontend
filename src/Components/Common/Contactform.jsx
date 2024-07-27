import React, { useState } from 'react'

import { countrycode } from '../../data/countrycode'

const Contactform = () => {
  const [code, setcode] = useState("+91")
  const[formdata,setformdata]=useState({
    firstName:"",
    lastName:"",
    email:"",
    phonenumber:"",
    message:""
  })
  const{firstName,lastName,email,phonenumber,message}=formdata
  const fun=(e)=>{
    setformdata(prev=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("The form Data", formdata)
  }
  
  return (
    <form className='flex flex-col gap-2 border border-white p-2 w-[100%] md:w-[50%]  '  onSubmit={handleSubmit}>
      <div className='flex items-center justify-between gap-9 p-2  '>
         <label>
          <p className='text-[#F1F2FF]  text-xs md:text-sm  p-2 ' >First Name</p>
          <input
            required
            type='text'
            placeholder='Enter the firstname'
            value={firstName}
            name='firstName'
            onChange={fun}
            className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
          />
         </label>

         <label>
          <p className='text-[#F1F2FF]  text-xs md:text-sm  p-2 ' >Last Name</p>
          <input
            required
            type='text'
            placeholder='Enter the last name'
            value={lastName}
            name='lastName'
            onChange={fun}
            className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
          />
         </label>
      </div>

      <label className='p-1'>
        <p className='text-[#F1F2FF]  text-xs md:text-sm  p-2  '>
         Email Address
        </p>
        <input
          required
          type='email'
          placeholder='Enter email address'
          value={email}
          name='email'
          onChange={fun}
          className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
        />
      </label>

      <label>
      <p className='text-[#F1F2FF]  text-sm '>Phone Number </p>
       <div className='w-100% flex   justify-between md:justify-evenly '>
          <select
          name='code'
          
          className=' rounded-[0.5rem] bg-richblack-800 md:p-[12px]  w-[20%] text-richblack-5'>
             {
              countrycode.map(item=>{
                return (<option>
                  {item.code}-  {item.country}
                </option>)
              })
             }
          </select>
          <input
            name='phonenumber'
            type='tel'
            placeholder='Phone number'
            maxLength={10}
            minLength={10}
            value={phonenumber}
            onChange={fun}
            className='w-[70%] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
          />
       </div>
      </label>

       {/* text area */}
      <label>
        <p className='text-[#F1F2FF]  text-sm '>Enter the message </p>
        <textarea
          required
          value={message}
          name='message'
          placeholder='Write your message :'
          rows={4}
          cols={40}
          className=' text-xs w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'
          onChange={fun}
        />
      </label>
      <button className=' w-full  text-sm p-2 text-center rounded-md bg-yellow-50 text-[#000814]' type='submit'>  
        Send Message
      </button>

    </form>
  )
}

export default Contactform