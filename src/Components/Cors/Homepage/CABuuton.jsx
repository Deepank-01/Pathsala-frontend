import React from 'react'
import { Link } from 'react-router-dom'

const CABuuton = ({children,active,linkto}) => {
  return (
    <Link to={linkto}>
     <div className={`text-center font-inter  md:text-[11px] text-[10px] px-6 py-3 rounded-md ${active ? "bg-yellow-50 text-black shadow-sm ": " bg-richblack-800 text-white  shadow-sm shadow-white"} transtion-all duration-200 hover:scale-105 `}>
        {children}
     </div>
    </Link>
  )
}

export default CABuuton