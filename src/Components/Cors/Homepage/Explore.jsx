import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"

const Explore = () => {
    const tab=["Free","New to coding ", "Skills paths","Career paths","Most popular"]
    const[currentTab,setcurrentTab]=useState(tab[0])
    const[course,setcourse]=useState(HomePageExplore[0].courses)
    const[currentCard,setcurrentcard]=useState(HomePageExplore[0].courses[0].heading)

    const setMycards=(value)=>{
          setcurrentTab(value)
          const result=HomePageExplore.filter((item)=>item.tag==value)
          setcourse(result[0].courses)
           setcurrentcard(result[0].courses[0].heading)
    }

  return (
    <div className='flex flex-col  gap-5 items-center'>
    <div className='flex flex-col items-center'>
     <div className='md:text-3xl text-xl  items-center font-inter text-pure-greys-50'>Explore  the options aviable for the <span className='text-[#1FA2FF]'> Course</span></div>
     <div className= " text-pure-greys-200 text-sm">Learn to build anything </div>
    </div>
    <button className='flex  items-center  gap-8  bg-richblack-800  rounded-xl  justify-between p-1 md:p-3 text-xs md:text-sm '>
     {
       tab.map((item)=>{
        return  <div className={`${currentTab==item ?(" bg-richblack-900  text-richblack-5 font-medium rounded-md  p-2"):(" text-richblack-300")} 
                                     text-[16px] flex item-center gap-2  transition-all duration-200 hover:scale-105 hover:cursor-pointer `}
                     onClick={()=>setMycards(item)}
                    >
          {item}
        </div>
       })
     }
    </button>


    </div>
  )
}

export default Explore