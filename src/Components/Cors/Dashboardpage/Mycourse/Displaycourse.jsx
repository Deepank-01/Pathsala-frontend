import React, { useState } from 'react'
import { CiClock2, CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { deleteCourse, fetchInstructorCourses, Publish } from '../../../../service/operations/courseDetailsAPI'
import { useSelector } from 'react-redux'
import ConfirmationModal from "../../../Common/ConfirmationModal"
import axios from 'axios'
import { useNavigate } from 'react-router'

const Displaycourse = ({item,setcourse}) => {
const {token}=useSelector(state=>state.auth)
const [confirmationModal, setConfirmationModal] = useState(null)
  const navigate=useNavigate()
  // const courseId=item._id
  const handleupdate=async()=>{
    // used to publish the course 
  
   navigate(`edit-course/${item._id}`)
  //  await Publish(data,token)
  //  const result = await fetchInstructorCourses(token)
  //  if (result) {
  //    setcourse(result)
  //  }
  //  setConfirmationModal(null)
  }
  const handledelete=async()=>{
       const data={
        courseId:item._id
       }
       await deleteCourse(data,token)
      const result = await fetchInstructorCourses(token)
    if (result) {
      setcourse(result)
    }
    setConfirmationModal(null)
  }
  return (
    <>
        <div className='flex   gap-2 md:gap-3  md:flex-row flex-col mt-3 w-[100%] '>
        {/* box 1 */}
        <div className=' flex  flex-col md:flex-row  md:w-[80%] w-[100%] border gap-6 md:gap-6   p-2'>
                           <img src={item.thumbnail} alt='thumbnail' className=' h-[150px] w-[150px]  aspect-auto max-w-maxContent rounded-lg'/>
                        <div className=' flex flex-col  items-start justify-around md:mt-1 mt-2 gap-4 md:gap-1  '>
                          <h1 className=' md:text-xl text-richblack-100'>{item.courseName}</h1>
                          <p className=' text-[#AFB2BF] md:text-sm  text-xs'>{item.courseDescription}</p>
                          <div className={`bg-[#2C333F]  text-xs p-2 rounded-md  mt-3 ${item.status === "Drafted" ? "text-[#F37290]" : "text-[#E7C009]"} flex flex-row  items-center gap-2 justify-around`}>
                          <CiClock2 />
                          {item.status}</div>
                        </div>
                       

         </div>
         {/* box2 */}
          <div className='md:w-[10%]  text-xs md:text-lg  p-2 text-[#AFB2BF]  flex items-center justify-center'>
          ₹{item?.price}
          </div>
          <div className='  p-2 flex gap-2  text-[#AFB2BF] items-center justify-center '>
            <button className=' transition-all duration-200 hover:text-caribbeangreen-100 hover:scale-110'
                          onClick={() => {
                      // setConfirmationModal({
                      //   text1: "Publish this course ?",
                      //   text2:
                      //     "On publish only this would be vissible to students",
                      //   btn1Text:"Publish",
                      //   btn2Text: "Cancel",
                      //   btn1Handler: () => handleupdate(item._id),
                      //   btn2Handler:() => setConfirmationModal(null)
                        
                      // })
                      handleupdate()
                    }
                    }
            ><CiEdit size={30}/></button>
            <button className=' transition-all duration-200 hover:text-[#C41E3A]  hover:scale-110'
              onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this course?",
                        text2:
                          "All the data related to this course will be deleted",
                        btn1Text:"Delete",
                        btn2Text: "Cancel",
                        btn1Handler: () => handledelete(item._id),
                        btn2Handler:() => setConfirmationModal(null)
                        
                      })
                    }}
            ><MdDelete size={30}/></button>
          </div>
        </div>
        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default Displaycourse