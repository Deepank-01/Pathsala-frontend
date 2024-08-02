import React from 'react'
import { useNavigate } from 'react-router'

const CourseCard = ({course}) => {
    const navigate=useNavigate()
  return (
    <div className='flex gap-2 bg-richblack-800  hover:cursor-pointer' onClick={()=>navigate("/dashboard/my-courses")}>
       <img src={course?.thumbnail} className=' md:w-[40%] aspect-video  max-h-[150px] w-[50%] rounded-lg  '/>
       <div className=' flex flex-col items-start py-1 gap-2  ml-4 '>
        <p className=' text-richblack-25 text-xs md:text-xl'>{course?.courseName}</p>
        <p className=' text-[#6E727F]  text-xs md:text-sm'> Amount Made: <span className=' text-yellow-100'>Rs {course?.TotalMoney}</span></p>
        <p className=' text-[#6E727F]  text-xs md:text-sm'> Student Enrolled :{course?.TotalStudent}</p>
     </div>
    </div>
  )
}

export default CourseCard