import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { statApi } from '../../../../service/operations/statApi'
import PieChart from './PieChart'
import CourseCard from './CourseCard'

const Stat = () => {
const {token}=useSelector(state=>state.auth)
const [Totalstudent,setTotalstudent]=useState(0)
const [TotalMoney,setTotalMoney]=useState(0)
const [StatData,setStatData]=useState([])
const student_Stat=(result)=>{
   let t_money=0
   let t_student=0
  result.forEach((item)=>{
        t_money+=item?.TotalMoney
        t_student+=item?.TotalStudent
  })
  setTotalMoney(t_money)
  setTotalstudent(t_student)
}
const getstat=async()=>{
    if(token){
       const result= await statApi(token)
       console.log("The data for the stat",result)
       if(result){
        student_Stat(result)
        setStatData(result)
       }
       
    }
}

useEffect(()=>{
    getstat()
},[])
  return (
    <div className='mt-[3.5rem]'>
              <h1 className=' text-richblack-50 text-lg md:text-2xl'>Dashboard</h1>

              <div className='flex flex-col w-full gap-3 items-start p-2'>
              {/* for the stats and money earn */}
                  <div className=' flex md:flex-row flex-col w-full  '>
                    <div className=' md:w-[70%] w-full  '>
                        <PieChart StatData={StatData}/>
                    </div>
                    <div className=' w-full md:w-[35%]  p-5 bg-richblack-700 max-h-[300px] md:gap-10 md:mt-0 mt-3 flex  flex-col items-start rounded-lg   '>
                     
                     <span className=' text-richblack-100 text-sm mt-5 md:text-2xl '>No. of course : {StatData?.length}</span>
                     <span className=' text-richblack-100 text-sm mt-5 md:text-2xl '> Total student enrolled : {Totalstudent}</span>
                     <span className=' text-richblack-100 text-sm mt-5 md:text-2xl '> Total money Earned : Rs {TotalMoney}</span>

                     
                    </div>
                  </div>
                  <div className=' w-full border mt-4 border-richblack-700'></div>
                  {/* for the courses */}
                  <div className=' text-xl md:text-2xl  text-yellow-50 mt-5 '>Courses</div>
                  <div className=' mt-5 flex md:flex-row flex-wrap w-full p-2  md:max-h-[500px] md:gap-8 flex-col gap-2'>
                    {
                      StatData.map((course,index)=>{
                        return <CourseCard course={course} key={index}/>
                      })
                    }
                  </div>

              </div>
    </div>
  )
}

export default Stat