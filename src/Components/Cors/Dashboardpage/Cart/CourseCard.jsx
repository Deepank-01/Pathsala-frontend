import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../Slice/cartSlice';

const CourseCard = ({course}) => {
  const dispatch=useDispatch()
  const handleRemove=()=>{
       dispatch(removeFromCart(course?._id))
       console.log("removed from the cart ")
  }
  return (
    <>
    <div className='w-full p-2 flex md:gap-2 md:flex-row flex-col gap-5 '>
    <div className='w-full flex gap-2'>
    <img src={course?.thumbnail} className=' md:w-[40%] aspect-video  max-h-[150px] w-[50%] rounded-lg  '/>
     <div className=' flex flex-col items-start py-1 gap-2  ml-4 '>
        <p className=' text-richblack-25 text-xs md:text-xl'>{course?.courseName}</p>
        <p className=' text-[#6E727F] text-xs md:text-sm'> instructor : {course?.instructor?.firstName}</p>
     </div>
     </div>
     <div className='flex flex-col gap-3 '>
      <button className=' text-[#EF476F] flex items-center justify-evenly p-2 bg-richblack-700 rounded-md' onClick={handleRemove}>
      <MdDelete/>
      <span>Remove</span>
      </button>
      <span className='text-[#FFD60A] text-sm md:text-xl'>Rs {course.price}</span>
     </div>
    </div>
    <div className=' border border-richblack-500 w-full'></div>
    </>
  )
}

export default CourseCard