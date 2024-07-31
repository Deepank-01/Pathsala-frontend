import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Student_enrolled_course } from '../service/operations/courseDetailsAPI'
import { useNavigate } from 'react-router'

const EnrolledCourse = () => {
   const [course,setCourse]=useState([])
   const {user}=useSelector(state=>state.profile)
   const{token}=useSelector(state=>state.auth)
  const [loading,setLoading]=useState(false)
   const navigate=useNavigate()
   const getdata=async()=>{
    setLoading(true)
   const result= await Student_enrolled_course(token)
   if(result){
    setCourse(result)
   }
   setLoading(false)
   }

   useEffect(()=>{
    getdata()
   },[])
  return (
    <>
    {
        loading ? 
        (<div>Loading the data </div>) :   
        <div className=' w-full mx-auto p-2 mt-3'>
            <div className=' text-xl md:text-3xl mt-4  text-richblack-5 '>Enrolled Courses</div>
            <div className=' flex  flex-col mt-2 items-start p-2'>
              {
                course && course.map((item,key)=>{
                    return <div className=' flex items-start p-2 md:flex-row  flex-col gap-2  ' >
                        <div className=' flex md:w-[80%] hover:cursor-pointer ' onClick={()=>navigate(`/view-course/${item._id}`)}>
                       <img src={item?.thumbnail} alt=' Course thumnail' className=' md:w-[30%] md:h-[30%] aspect-video w-[40%] h-[40%] ' />
                       <div className='flex flex-col px-2 py-4 '>
                         <span className=' text-[#F1F2FF] text-sm md:text-lg'>  {item?.courseName}</span>  
                         <span className=' md:block hidden text-[#838894] text-xs md:text-sm'>{item?.courseDescription}</span>
                       </div>
                       </div>
                       <button className='md:block hidden  md:w-[10%] md:my-auto mx-auto  text-richblack-800 bg-yellow-100 text-sm md:text-sm p-2 rounded-md 'onClick={()=>navigate(`/view-course/${item._id}`)}> Learn Now </button>   
                    </div>
                })
              }
              <div className=' w-full border border-richblack-400  mt-2'></div>
            </div>

        </div>
    }
      
    </>
  )
}

export default EnrolledCourse