import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router'
import { getFullDetailsOfCourse } from '../service/operations/courseDetailsAPI'
import { setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../Slice/viewCourseSlice'
import VideoDetailsSidebar from '../Components/Cors/ViewCourse/VideoDetailsSidebar '
// import Footer from '../Components/Common/Footer'

const ViewCourse = () => {
    const{token}=useSelector(state=>state.auth)
    const {sectionId}=useParams()
    const dispatch=useDispatch()
  //  const [loading ,setloading]=us
    const {courseId}=useParams()
    const getData=async()=>{
        const result =await getFullDetailsOfCourse(courseId,token)
        console.log("THis the result of the video ",result)
        dispatch(setCourseSectionData(result?.courseDetails?.courseContent))  // section data 
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
      <div className=' w-full  flex justify-between  mt-[3.5rem] '>
         <div className='h-[calc(100vh-3.5rem)] overflow-y-auto overflow-x-hidden w-[30%] md:w-[20%] border border-white'>
         <VideoDetailsSidebar/>
         </div>
          
          {
            sectionId ?(<div className='h-[calc(100vh-3.5rem)] md:w-[80%] w-[70%] overflow-y-auto'>
          <Outlet/>
          </div>):(<div className=' text-xl text-white'> PLease Select the video </div>)
          }
          
         
      </div>
      
    </>
  )
}

export default ViewCourse