import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchInstructorCourses } from '../../../../service/operations/courseDetailsAPI'
import { useNavigate } from 'react-router'
import CourseTable from './CourseTable'

const MyCourse = () => {
    const {token}=useSelector(state=>state.auth)
    const [course,setcourse]=useState([])
    const navigate=useNavigate();
    const fetchinfo=async()=>{
        const result= await fetchInstructorCourses(token)
        if(result){
            setcourse(result)
            console.log(result)
        }
    }
    useEffect(()=>{
        fetchinfo()
    },[])
  return (
    <>
        <div className=' flex  flex-col gap-4 mt-[5rem] items-start'>
        <div className='flex w-[100%] items-center  justify-between p-2 '>
          <h1 className='text-[#F1F2FF]  text-sm md:text-xl '> My Course</h1>
          <button className='bg-[#FFD60A] text-richblack-900 p-2 md:px-4 rounded-lg  text-xs md:text-lg ' onClick={()=>navigate("/dashboard/add-course")}>
          Add course
          </button>
        </div>
         {
            course && <CourseTable course={course} setcourse={setcourse}/>
        }  

        </div>
    </>
  )
}

export default MyCourse