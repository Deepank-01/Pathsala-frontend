import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../../../service/apiConnector'
import { Categories } from '../../../../service/apis'
import toast from 'react-hot-toast'
import { createCategory } from '../../../../service/operations/category'

const AddCategories = () => {
    const [formdata,setformdata]=useState({category:"",description:""})
    const[CategoryData,setCategoryData]=useState([])
    const[loading,setloading]=useState(false)
    const{token}=useSelector(state=>state.auth)
    
    const {category,description}=formdata
    const handleformdata=(e)=>{
        setformdata((prev)=>{
          return  {
                    ...prev,
                    [e.target.name]:e.target.value
                   }
        })
        console.log("This is the formdata",formdata)
    }
  const submitform=(event)=>{
    event.preventDefault()
    setloading(true)
    const data={
        name:category,
        description:description
    }
    createCategory(data,token)
     setloading(false)
     setformdata({category:"",description:""})
  }
  const cat_data=async()=>{
    const toast_id=toast.loading("Loading ")
    setloading(true)
       const result=await apiConnector("GET",Categories.CATEGORIES_URL)
       if(result){
        setCategoryData(result?.data?.category)
        console.log(result?.data?.category)
       }
       else{
        toast.error("Cannot Get the Category Data")
       }
       setloading(false)
       toast.dismiss(toast_id)
  }
  useEffect(()=>{
    cat_data()
  },[])

  return (
    <>
    {
        loading? (<div className=' text-2xl text-richblack-50 mt-[3.5rem]'>Loading </div>):
        (  <div className=' w-full px-3 mt-[3.5rem]'>
            <h1 className=' text-xl md:text-2xl text-richblack-25 '>Add Category</h1>
            <div className=' border border-richblack-600 w-full mt-2'></div>
            <div className='flex md:flex-row flex-col w-full gap-2 mt-4'>
            {/* category Add */}
            
              <form className=' md:w-[50%] flex flex-col justify-around mt-4' onSubmit={submitform}>
                  <label className='py-2 px-4 '>
                     <p className=' text-richblack-25 px-2 md:text-xl text-lg'>Category <sup className=' text-pink-200 text-xs'> *</sup></p>
                     <input
                      placeholder='Entire the Category to be Added ...'
                      value={category}
                      required
                      name='category'
                      type='text'
                      onChange={handleformdata}
                      style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                      className=' bg-richblack-800 text-richblack-25 px-2 py-2 rounded-md w-[70%] mt-4 ml-4  '
                     />
                  </label>
      
                  <label className='py-2 px-4 '>
                     <p className=' text-richblack-25 px-2 md:text-xl text-lg'>Description <sup className=' text-pink-200 text-xs'> *</sup></p>
                     <textarea
                      rows={4} cols={40}
                      placeholder='Entire the Description ...'
                      value={description}
                      required
                      name='description'
                      type='box'
                      onChange={handleformdata}
                      style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                      className=' bg-richblack-800 text-richblack-25 px-2 py-2 rounded-md w-[70%] mt-4 ml-4  '
                     />
                  </label>
                  <button className='bg-yellow-100 text-richblack-800 p-1 rounded-md md:w-[20%] md:mx-[30px] ' type='submit'>Add</button>
              </form>
              <div className=' md:w-[50%] p-10 bg-pure-greys-800 md:max-h-[500px] md:overflow-y-auto rounded-lg '>
              <p className=' text-richblack-5'>Current Categories</p>
              {
                  CategoryData.map((item,index)=>{
                      return <li className='text-richblack-50' key={index}>{item.name}</li>
                  })
              }
              </div>
      
           
            </div>
          </div>)
    }
    </>
  
  )
}

export default AddCategories