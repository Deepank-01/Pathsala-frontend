import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Dashboardpage/Sidebar'
import Slider from './Slider'
import SectionName from './SectionName'
// import { useLocation } from 'react-router'

const VideoDetailsSidebar  = () => {
    const { courseSectionData}=useSelector(state=>state.viewCourse)
   
    

  return (
    <div className=' md:w-[20%] w-[30%]  min-h-[calc(100vh-3.5rem)]  mt-[3.0rem] border border-white flex flex-col'>
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