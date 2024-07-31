import React from 'react'
import { FaCamera, FaPlay, FaVideo } from 'react-icons/fa'
import { useLocation, useNavigate, useParams } from 'react-router'

const Slider = ({subSection}) => {
    const Location=useLocation()
    const{courseId}=useParams()
   const navigate=useNavigate()
//    console.log(courseId)
console.log(Location.pathname)
    const matchPath=(value)=>{
         const path=`/view-course/${courseId}/section/${value}`
    
         return Location.pathname ==path
    } 
  return (
    <div className='p-1  w-full rounded-lg mt-2 flex flex-col items-start gap-2  '>
      {
       subSection && subSection?.map((item,index)=>{
        return <div key={index} className={`${matchPath(item?._id)?("bg-yellow-50 text-richblack-800"):(" text-richblack-200 text-xs md:text-sm")} flex  gap-9  bg-richblack-700 p-2 rounded-lg hover:cursor-pointer `} onClick={()=>navigate(`/view-course/${courseId}/section/${item?._id}`)}>
             {item?.title}
             <div className=' my-auto'> <FaPlay size={10}/></div>
        </div>
       })
      }
      <div className=' w-full border border-richblack-300'></div>
    </div>
  )
}

export default Slider