import React from 'react'
import *  as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux'
import { matchPath, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
const SidebarLink = ({iconName,path,pathname}) => {
    const Icon =Icons[iconName]
    
    const Location =useLocation()
    const dispatch =useDispatch()
const pathmatch=(path)=>{
    return matchPath(path,Location.pathname)
}

  return (
    <>
     <Link to={path} className={`flex  mt-5 md:text-sm text-xs  items-center p-2 gap-5 ${pathmatch(path)? " bg-yellow-200  text-richblack-600 rounded-lg  shadow-lg shadow-yellow-300 ":" text-richblack-50"}`} >
      <Icon  size={20}/>
      <div className=' text-[10px] md:text-sm'>{pathname}</div>
     </Link> 
    </>
  )
}

export default SidebarLink