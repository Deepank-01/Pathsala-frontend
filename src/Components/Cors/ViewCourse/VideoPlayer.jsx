import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
// import { setLoading } from '../../../Slice/authSlice'
// import ReactJWPlayer from 'react-jw-player';

const VideoPlayer = () => {
  const  {subSectionId,sectionId}=useParams()
  const { courseSectionData}=useSelector(state=>state.viewCourse) // section data 
  const [subsection_details,setsubsection_details]=useState([])
  const [loading,setloading]=useState(false)
const handledata=()=>{
setloading(true)
const toast_id=toast.loading("Loading the data")
  const section_details=courseSectionData?.filter((item)=>{
    return item._id==sectionId
})


const result=section_details[0]?.subSection?.filter((item)=>{
  return item._id==subSectionId
})

setsubsection_details(result)
toast.dismiss(toast_id)
setloading(false)
}

useEffect(()=>{
handledata()
// console.log("This is the subsection detials",subsection_details)
},[subSectionId])


  return (
    <>
      <div className="w-full h-full border border-yellow-25 ">
        {courseSectionData?.length > 0 && (
          <div className=' flex  w-full'>
            {subsection_details?.length > 0 ? (
              <ReactPlayer
                url={subsection_details[0].videoUrl}
                controls={true}
                pip={true}
                // width={100%}
                width='100%'
                height='100%'
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload noremoteplayback",
                      // disablePictureInPicture: true,
                    },
                  },
                }}
              />
           
            ) : (
              <p className=" text-white text-2xl">The video is not present </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default VideoPlayer