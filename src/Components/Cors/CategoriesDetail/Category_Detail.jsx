import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiConnector } from '../../../service/apiConnector'
import { Categories } from '../../../service/apis'
import { getcategoryDetail } from '../../../service/operations/category'
import Category_slider from './Category_slider'
import Card from './Card'
// import {CATEGORIES_URL} from "../../../service/apis"
const Category_Detail = () => {
  const {categoryName}=useParams()
  // console.log(categoryName)
  const [categoryId,setcategoryId]=useState("")
  const[PageData,setPageData]=useState([])

  const handlerId=async()=>{
    const allcategory=await apiConnector("GET",Categories.CATEGORIES_URL)
    // console.log(allcategory)
    const cat_Id=allcategory?.data?.category.filter((item)=>(item.name===categoryName))[0]._id
    // console.log("This the category id ",cat_Id)
    setcategoryId(cat_Id)
    // console.log("The category id is ",categoryId)
    
  }

  const handleDetail=async()=>{
    
    
     const result=await  getcategoryDetail({categoryId:categoryId})
     console.log("This the page Data", result)
     
      setPageData(result)
     
  }
useEffect(()=>{
  handlerId()
},[categoryName])
useEffect(()=>{
  if(categoryId){
    handleDetail()
  }
},[categoryId])

  return (
    <>
    {/* category heading */}
      <div className=' w-full bg-[#161D29] mt-[3.5rem]'> 
      <div className=' w-11/12 max-w-maxContent mx-auto flex  flex-col  p-2 gap-2'>
      <div className=' flex felx-row items-start gap-2 text-[#838894]'>
        <p>Home /</p>
        <p>Catagory /</p>
        <span className=' text-[#FFD60A]'>{categoryName}</span>
      </div>
      <div className='flex flex-col gap-2 p-2 items-start'>
       <h1 className=' text-richblack-5  text-xl md:text-2xl '>{categoryName}</h1>
       <div className='  text-sm text-[#999DAA] md:text-lg'>{PageData?.data?.selectedCategory?.description}</div>
      </div>

      </div>
      </div>  
      {/*  */}
      <div className='w-11/12 max-w-maxContent mx-auto mt-4'>
       <div className='  text-lg md:text-2xl text-richblack-25'>{`Courses for the ${categoryName}`} </div>
       <div className='border border-richblack-700 mt-1'></div>
       <div>
        <Category_slider courses={PageData?.data?.selectedCategory?.course}/>
       </div>
         <div className=' border border-richblack-600 mt-4'></div>
       <div className=' text-richblack-50 mt-5  text-xl md:text-2xl '> Explore the Together Course </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {
                            PageData?.data?.differentCategory?.course?.slice(0,4)
                            .map((course, index) => (
                                <Card course={course} key={index} />
                            ))
          }
          </div>
      </div>
    </>
  )
}

export default Category_Detail