import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Dashboardpage/Sidebar'
import Slider from './Slider'
import SectionName from './SectionName'
// import { useLocation } from 'react-router'

const VideoDetailsSidebar  = () => {
    const { courseSectionData}=useSelector(state=>state.viewCourse) // section data 
   
  return (
    <div className=' flex flex-col'>
       <div>
        {
            courseSectionData && courseSectionData.map((item,index)=>{
                return <div className='' key={index}>
                <SectionName item={item}/>
                {/* {item?.sectionName}
                {
                   item?.subSection?.length >0 ?(<Slider subSection={item?.subSection} />):"No Video "
                } */}
                </div>
            })
        }
       </div>
     </div>
  )
}

export default VideoDetailsSidebar 