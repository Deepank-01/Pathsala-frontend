import React from 'react'
import Displaycourse from './Displaycourse'

const CourseTable = ({course,setcourse}) => {
  return (
    <>
       <div className=' flex  flex-col gap-2 w-full'>
        {/* used for the heading */}

        {
            course?.length==0 ?(<div className=' text-richblack-25'>Courses are not present Please add course</div>)
            :(
                course.map((item)=>{
                    return  <>
                    <Displaycourse item={item} setcourse={setcourse}/>
                    <div className='w-full border border-richblack-800'></div>
                    </>
                    
                })
            )
        }
       </div>
    </>
  )
}

export default CourseTable