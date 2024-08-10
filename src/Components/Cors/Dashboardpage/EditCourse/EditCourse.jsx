import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getFullDetailsOfCourse } from '../../../../service/operations/courseDetailsAPI'
import { setCourse, setEditCourse } from '../../../../Slice/courseSlice'
import toast from 'react-hot-toast'
import Render from '../AddCourse/Render'

const EditCourse = () => {
    const dispatch=useDispatch()
    const {courseId}=useParams()
    const {token}=useSelector(state=>state.auth)
    const{course}=useSelector(state=>state.course)
    const [loading, setLoading] = useState(false)
    const handle_fun=async()=>{
        setLoading(true)
         const result=await getFullDetailsOfCourse(courseId,token)
         console.log("This the api resutl of the edit course",result)
         
         if(result?.courseDetails){
            dispatch(setEditCourse(true))
            dispatch(setCourse(result?.courseDetails))
           
         }
         setLoading(false)
         
    }

    useEffect(()=>{
        handle_fun()
    },[])
    if (loading) {
        return (
          <div className="grid flex-1 place-items-center">
            <div className="spinner"></div>
          </div>
        )
      }
  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Course
      </h1>
      <div className="mx-auto max-w-[600px]">
        {course ? (
          <Render />
        ) : (
          <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
            Course not found
          </p>
        )}
      </div>
    </div>
  )
}

export default EditCourse