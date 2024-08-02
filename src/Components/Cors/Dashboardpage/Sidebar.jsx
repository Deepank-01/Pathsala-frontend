import React from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { IoIosLogOut } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { logout } from '../../../service/operations/authAPI'
const Sidebar = () => {
    const{user,loading:profileLoading}=useSelector(state=>state.profile)
    const{authLoading}=useSelector(state=>state.auth.loading)
    const navigate=useNavigate()
    const dispatch=useDispatch()
   const handle_logout=()=>{
    dispatch(logout(navigate))
   }

  return (
    <div>
      <div className=" h-[calc(100vh-3.5em)]  flex flex-col   min-w-[15vw] md:min-w-[15vw]  border-r-2 border-r-richblack-700 bg-richblack-900  ">
        {/* render using the data of of the dashbord */}
        <div className="flex flex-col">
          {sidebarLinks.map((item, index) => {
            if (item.type && item.type !== user.accountType) return null;
            return (
              <div>
                <SidebarLink
                  iconName={item.icon}
                  path={item.path}
                  pathname={item.name}
                />
              </div>
            );
          })}
        </div>

        <div className=" mt-[7vh] border-[1px] border-richblack-600"></div>

        <div className="flex flex-col gap-5">
          <SidebarLink
            iconName={"VscSettingsGear"}
            path={"/dashboard/settings"}
            pathname={"Settings"}
          />
          {/* <sidebarLinks iconName={""} path={"/dashboard/logout"} pathname={"Logout"} /> */}
            <div
              className={`flex  mt-2 md:text-sm text-xs  items-center p-2 gap-8   text-richblack-50 hover:cursor-pointer`} onClick={handle_logout}>
              <IoIosLogOut size={20} />
              <div className=" text-[10px] md:text-sm">Logout</div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar