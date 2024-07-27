import React from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
const Sidebar = () => {
    const{user,loading:profileLoading}=useSelector(state=>state.profile)
    const{authLoading}=useSelector(state=>state.auth.loading)


  return (
    <div >

    <div className=' h-[calc(100vh-3.5em)]  flex flex-col   min-w-[15vw] md:min-w-[15vw]  border-r-2 border-r-richblack-700 bg-richblack-900  '>
      {/* render using the data of of the dashbord */}
         <div className='flex flex-col'>

         {
            sidebarLinks.map((item,index)=>{
                if(item.type && item.type!==user.accountType) return null
                return (
                    <div>
                        <SidebarLink iconName={item.icon} path={item.path} pathname={item.name}/>
                    </div>
                )
            })
         }
            
         </div>

         <div className=' mt-[7vh] border-[1px] border-richblack-600'></div>

         <div className='flex flex-col gap-5'>
         <SidebarLink iconName={"VscSettingsGear"} path={"/dashboard/settings"} pathname={"Settings"} />
         <sidebarLinks iconName={""} path={"/dashboard/logout"} pathname={"Logout"} />
         </div>



    </div>

    </div>
  )
}

export default Sidebar