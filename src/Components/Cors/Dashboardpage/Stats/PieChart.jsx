import React, { useState } from 'react'
import {Chart,registerables} from "chart.js"
Chart.register(...registerables);
import { Pie } from 'react-chartjs-2';

const PieChart = ({StatData}) => {
    // data for the pie cart 
    // for the student
    // random color function 
    const[current,setcurrent]=useState("student")

    const randomcolor=(numcolors)=>{
      const colors=[]
      for(let i=0;i<numcolors;i++){
        const color=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        colors.push(color)
      }
      return colors
    }
    const ChartData_amount={
      labels:StatData?.map((course)=>course.courseName),
      datasets:[
        {
          data:StatData?.map(course=>course.TotalMoney),
          backgroundColor:randomcolor(StatData.length)

        }
      ]
    }
    const ChartData_student={
        labels:StatData?.map((course)=>course.courseName),
        datasets:[
            {
            data:StatData?.map(course=>course.TotalStudent),
             backgroundColor:randomcolor(StatData.length)
            }
        ]
    }
  return (
    <div className='w-full h-full md:max-h-[400px] max-h-[300px] p-8'>
       <div className=' flex gap-5 mb-5'>
        <button className={`${current=="student"?( "bg-yellow-100 text-richblack-700  transtion-all scale-110"):("bg-richblack-500 text-richblack-50") } rounded-md text-sm md:text-sm p-2  `} onClick={()=>setcurrent("student")}>
            Student Data 
        </button>
        <button className={`${current=="instrutor"?( " bg-yellow-100 text-richblack-700 transtion-all scale-110 "):("bg-richblack-500 text-richblack-50") } rounded-md text-sm md:text-sm p-2 `} onClick={()=>setcurrent("instrutor")}>
            Amount 
        </button>
       </div>
       <Pie
        data={current=="student"?(ChartData_student):(ChartData_amount)}
       />
    </div>
  )
}

export default PieChart