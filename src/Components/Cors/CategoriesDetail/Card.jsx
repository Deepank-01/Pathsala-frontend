import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({course}) => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col gap-2 p-2 bg-pure-greys-800 rounded-lg md:min-h-[400px] hover:cursor-pointer transition-all duration-200 hover:scale-105   shadow-2xl  ' onClick={()=>navigate(`/courses/${course._id}`)}>
     <img src={course.thumbnail} alt='Image of the course'  className='rounded-lg  md:max-h-[200px]'/>
     <p className=' text-richblack-25   text-lg md:text-xl mt-3 '>{course.courseName}</p>
     <p className='    text-xs md:text-xs text-[#838894] mt-3 '>{course.courseDescription}</p>
     <p className=' text-yellow-50 text-lg mt-3'>Rs. {course.price}</p>
     <button className=' bg-yellow-200 text-richblack-900 md:w-[30%]  p-2 rounded-md '>Enroll Now</button>
    </div>
  )
}

export default Card