import React from 'react'
import Sidebar from '../Components/Cors/Dashboardpage/Sidebar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {user} =useSelector(state=>state.profile)
  return (
    <>
      {
        user? (<div className=' flex  min-h-[calc(100vh-3.5rem)]  mt-[3rem]  w-[100%] '>
        {/* sidebar component */}
        <Sidebar/>
        <div className=' h-[calc(100vh-3.5rem)] w-11/12 overflow-auto '>
           <div className='w-11/12 mx-auto border border-white'>
              <Outlet/>
           </div>
        </div>
    </div>)  :(<div className=' w-[100%] h-[70vh] my-auto  text-xlmd:text-3xl text-[#F1F2FF] '>404 User not  found </div>)
      }
    </>
    
  )
}

export default Dashboard