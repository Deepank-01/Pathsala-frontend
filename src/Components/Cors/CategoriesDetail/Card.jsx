import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({course}) => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col gap-2 p-2 bg-[#161D29] rounded-lg md:min-h-[400px] hover:cursor-pointer ' onClick={()=>navigate(`/courses/${course._id}`)}>
     <img src={course.thumbnail} alt='Image of the course'  className='rounded-lg  md:max-h-[200px]'/>
     <p className=' text-richblack-25   text-lg md:text-xl mt-3 '>{course.courseName}</p>
     <p className='    text-xs md:text-xs text-[#838894] mt-3 '>{course.courseDescription}</p>
     <p className=' text-richblack-25 text-lg mt-3'>Rs. {course.price}</p>
    </div>
  )
}

export default Card