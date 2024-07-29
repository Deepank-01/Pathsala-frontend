import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'
import navimg from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import navlogo from "../../assets/Logo/Logo-Small-Light.png"
import { HiBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { apiConnector } from '../../service/apiConnector'
import {Categories} from "../../service/apis"
import { IoIosArrowDropdown } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { logout } from '../../service/operations/authAPI'
const Navbar = () => {
    const [currenttab,setcurrenttab]=useState(NavbarLinks[0].title) // this will work fine but issue woth the login and sign up parameters
    const token=useSelector(state=>state.auth.token)
    const user=useSelector(state=>state.profile.user)
    const [categorydrop,setcategorydrop]=useState(false)
    // console.log(user.firstName)

    // api Call
    const[subLinks,setsubLinks]=useState([]);// used to store the categoryis from the backend
    const fetchsubLinks=async()=>{
        try{
           const result= await apiConnector("GET",Categories.CATEGORIES_URL)
           
          console.log("THis the data of the categoryies from backend",result.data.category.length)
          setsubLinks(result.data.category)
        }
        catch(err){
          console.log("The error in the api fecthing of the categories is ",err)
          console.log(Categories.CATEGORIES_URL)
        }
    }
    useEffect(()=>{
      fetchsubLinks()
    },[])

  console.log(user)



    const[open,setopen]=useState(false)
    const[profile,setprofile]=useState(false)
    const Location =useLocation()
    const dropdown=()=>{
            setopen(!open)
    }
   
      const match=(value)=>{

        //   console.log(`The value of the path is ${value} and the orfinal ptah is ${Location.pathname}`)
           return matchPath({path:value},Location.pathname)

    }


// code for the logout function 
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const logoutfun=()=>{
    dispatch(logout(navigate))
   }




  return (
    <>
    <div className='flex items-center w-screen justify-center border-b-2  border-richblack-500  fixed top-0 z-50 bg-richblack-900 '>
    <div className='hidden lg:block lg:w-11/12  '>
    {/* navbar for large screen */}
    <div className=' w-11/12 max-w-maxContent flex h-14  items-center mx-auto justify-between'>
    <Link to="/">
        <img src={navimg}/>
    </Link>

    {/* for the home ,catalog etc */}
    <div className='flex items-center  gap-16 justify-between text-xl  text-richblack-500 '>
    {
        NavbarLinks.map((item)=>{
        return <div>
        {
            item.title=="Categories" ?(<div className=''>
              {
                subLinks.length >0  && (
                    <div className=' relative '>
                    <button className='flex items-center justify-between gap-3' onClick={()=>setcategorydrop(!categorydrop)}>
                        Categories
                        {
                            categorydrop?(<MdArrowDropUp color='white' size={30}/>):(<MdArrowDropDown color='white' size={30}/>)
                        }
                     
                     </button>
                    
                      {
                        categorydrop ?(<div className=' absolute  bg-white top-9  right-0  w-[100%] min-h-[100px] rounded-lg bg-white/90 '>
                                   {
                                    subLinks.map((item,key)=>{
                                        return <div 
                                        className='flex flex-col items-start justify-between p-3 font-inter text-sm text-richblack-800 transition-all
                                                   duration-200 hover:cursor-pointer hover:bg-richblack-200 hover:scale-100 rounded-md'>
                                               <Link to={`/categories/${item.name}`}>
                                               {item.name}
                                               </Link>
                                        </div>
                                    })
                                   }
                        </div>):(<div></div>)
                      }
                    </div>
                )
              }
            </div>):(
                <Link to={item.path}>
                <button 
             className={`${match(item.path)?(" text-yellow-5"):("")}`}>
            {item.title}</button>
            </Link>
            )
        }
        </div>
        
     })
    }
    
    </div>
    

    {/* Logic for the  login and sign up bottom  and profile button */}

    <div className='flex gap-7 items-center'>
       {
        
        user && user.role !="instructor" && (
          <div className='flex flex-row gap-8  items-center justify-between'>
            <Link to={"/dashboard/cart"} className='relative'>
           <FaShoppingCart color='white' size={20}/>
            </Link>
            </div>
        )  
        
       }

       {/* for the profile name  */}
       {
        token && user && (<div className=' text-richblack-5 ml-4  relative'>
                {/* logic for the profile  */}
                <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName}${user.lastName}`}
                alt='profile'
                 className=' rounded-xl  hover:cursor-pointer size-9 '
                  onClick={()=>setprofile(!profile)}
                 />
                 {
                  profile &&  <div className=' absolute bg-white  flex flex-col items-start  min-w-[100%] w-[200px] bg-white/90 text-richblack-800 py-2 rounded-lg top-9 right-0  '>
                 <div className=" text-lg p-4">Welcome {user.firstName}</div>
                   <div className=' border border-black w-[100%]'></div>
                   <Link to={"/dashboard"} className=' p-4 w-[100%] rounded-md  text-xs transition-all duration-200 hover:scale-105 hover:bg-richblack-200 '>Dashboard</Link>
                   <Link to={"/profile"} className=' p-4 w-[100%] rounded-md  text-xs transition-all duration-200 hover:scale-105 hover:bg-richblack-200 '>profile</Link>
                   <button className=' p-4 w-[100%] rounded-md  text-xs transition-all duration-200 hover:scale-105 hover:bg-yellow-200 ' 
                   onClick={logoutfun}>Logout</button>
                 </div>
                 }
        </div>)
       }
      

       {
        token===null &&(
            <Link to="/login">
            <button className={`flex items-center p-3 transition-all duration-200 hover:scale-110 text-lg  ${match("/login")?(" text-yellow-5"):("text-richblack-500")}`}>
                Login
            </button>
        </Link>
       
        )
       }
       {
        token===null &&(
            <Link to="/signup">
            <button className={`flex items-center p-3 transition-all duration-200 hover:scale-110 text-lg  ${match("/signup")?(" text-yellow-5"):("text-richblack-500")}`}>
                Signup
            </button>
        </Link>
       
        )
       }
       

       
    </div>

    
    
    
    </div>
   </div>




   {/* navbar for small screen */}
     <div className='lg:hidden border border-yellow-500 w-11/12  '>
     <div className='flex items-center justify-between w-[100%] max-w-maxContent '>
     {/* image */}
      <Link to={"/"}>
        <img src={navlogo}></img>
      </Link>

      <div className='flex items-center  gap-9 '>
      {
        token && user &&(<div className=' '>
          <img src={user.image} className='rounded-xl size-9'/>
          
        </div>)
      }
      <div className='relative w-[40%] flex flex-col items-end'>
         <button onClick={dropdown} className=' item'>
            <HiBars3 color='white' size={40}/>
            
         </button>
         <div className={`"${open ?(" block"):(" hidden")} absolute  min-w-[40vw] h-[50vh]   p-5 rounded-md   bg-richblack-900/80  " flex flex-col items-start  gap-6 top-[5vh]`}>
            {
                   NavbarLinks.map((item,key)=>{
                    {
                      return  item.title=="Categories" ? (<div >
                      {/* logic for the drop down for the category  */}
                        {
                         subLinks.length >0  && (
                    <div className=' relative '>
                    <button className='flex items-center justify-between gap-3 text-richblack-25' onClick={()=>setcategorydrop(!categorydrop)}>
                        Categories
                        {
                            categorydrop?(<MdArrowDropUp color='white' size={30}/>):(<MdArrowDropDown color='white' size={30}/>)
                        }
                     
                     </button>
                    
                      {
                        categorydrop ?(<div className=' absolute  bg-white top-9  right-0  w-[100%] min-h-[100px] rounded-lg bg-white/90 '>
                                   {
                                    subLinks.map((item,key)=>{
                                        return <div 
                                        className='flex flex-col items-start justify-between p-3 font-inter text-sm text-richblack-800 transition-all
                                                   duration-200 hover:cursor-pointer hover:bg-richblack-200 hover:scale-100 rounded-md'>
                                               <Link to={`/categories/${item.name}`}>
                                               {item.name}
                                               </Link>
                                        </div>
                                    })
                                   }
                        </div>):(<div></div>)
                      }
                    </div>
                )
              }
                      </div>) :(<Link to={item.path}><button  
                      className={`${match(item.path)?(" text-yellow-5"):(" text-richblack-25")} transition-all duration-200 hover:scale-105 p-3 `} >
                                   {item.title}
                            </button>
                            </Link>)
                    }
                    
                   })
            }
            {
              user && token&& (<Link to={"/dashboard"} className={`${match("/dashboard")?(" text-yellow-5"):(" text-richblack-25")} transition-all duration-200 hover:scale-105 p-3`}>Dashboard
              </Link>)
            }
            <div className='w-[100%] border border-richblack-25 bg-white'></div>
            <div className='flex  items-start w-[100%] '>
              {
                user ? (<button 
                className=' p-4 rounded-lg shadow-sm shadow-white transition-all duration-200 text-richblack-800  bg-yellow-100'
                   onClick={logoutfun} >
                   Logout</button>):(<div className='flex gap-16 mt-5 items-center  '>
                  <Link to={"/login"}>
                    <button 
                    className={`"${match("/login")?("  text-richblack-900 bg-yellow-50"):(" text-richblack-5 bg-richblack-800")} " rounded-lg  shadow-sm shadow-white transition-all duration-200 hover:scale-110 px-3 py-1
                     `}>
                        Login
                    </button>
                </Link>
                <Link to={"/signup"}>
                    <button 
                    className={`"${match("/signup")?("  text-richblack-900 bg-yellow-50"):(" text-richblack-5 bg-richblack-800")} "rounded-lg  shadow-sm shadow-white transition-all duration-200 hover:scale-110 px-3 py-1
                     `}>
                        signup
                    </button>
                </Link>
                </div>)
              }
                
            </div>
            </div>

      </div>


      </div>

     </div>
      
     </div>
    </div>
</>
  )
}

export default Navbar