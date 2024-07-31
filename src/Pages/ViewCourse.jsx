import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router'
import { getFullDetailsOfCourse } from '../service/operations/courseDetailsAPI'
import { setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../Slice/viewCourseSlice'
import VideoDetailsSidebar from '../Components/Cors/ViewCourse/VideoDetailsSidebar '

const ViewCourse = () => {
    const{token}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
  //  const [loading ,setloading]=us
    const {courseId}=useParams()
    const getData=async()=>{
        const result =await getFullDetailsOfCourse(courseId,token)
        console.log("THis the result of the video ",result)
        dispatch(setCourseSectionData(result?.courseDetails?.courseContent))
        dispatch(setEntireCourseData(result?.courseDetails))
        let lectures = 0;
        result?.courseDetails?.courseContent?.forEach((sec) => {
          lectures += sec.subSection.length
        })  
        dispatch(setTotalNoOfLectures(lectures));

    }
 useEffect(()=>{
    getData()
 },[])

  return (
    <>
      <div className=' w-full  flex '>
          <VideoDetailsSidebar/>
          <Outlet/>
      </div>
    </>
  )
}

export default ViewCourse