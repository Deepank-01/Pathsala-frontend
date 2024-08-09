import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../service/operations/studentFeaturesAPI';
import { fetchCourseDetails } from '../service/operations/courseDetailsAPI';
import toast from 'react-hot-toast';
import { addToCart } from '../Slice/cartSlice';

const CourseDetails = () => {

    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {courseId}  = useParams();
    const[courseData,setCourseData]=useState(null)
    const[lecture,setlecture]=useState(0)
    const[TotalSection,setTotalSection]=useState(0)
    const getData=async()=>{
        if(courseId){
        const result =await fetchCourseDetails(courseId)
        // console.log("This is the information fot eh course",result)
        setCourseData(result?.course)
        calcluteTotal_Lecture(result?.course?.courseContent)
        }
    }
    const calcluteTotal_Lecture=(data)=>{
      console.log(data)
      let total_lecture=0
      let total_section=data.length || 0
      data.forEach((item)=>{
        total_lecture+=item?.subSection.length || 0        
      })
      console.log("The total course content is ",total_section)
      setlecture(total_lecture)
      setTotalSection(total_section)

    }
    useEffect(()=>{
        getData()
        console.log("This the courseData",courseData)
    },[courseId])

    // used to calclute teh lecture number and the section num
    // useEffect(()=>{

    // },[])

    const handleBuyCourse = () => {
        
        if(token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
        alert("Please Login again")
        navigate("/login")
    }
    const handlecart=()=>{
      if(!token){
          toast.error("please Login again")
          navigate("/login")
      }
        if(user && user?.accountType!="student"){
           toast.error("You are not allowed")
        }
        dispatch(addToCart(courseData))
      
    }


  return (
    <div className=' mt-[3.5rem]'>
        {/* <button className='bg-yellow-50 p-6 mt-10 '
        onClick={handleBuyCourse}>
            Buy Now
        </button> */}
        {/* for the upper section */}
        <div className=' bg-[#161D29] w-full  '>
        <div className=' relative  w-11/12 max-w-maxContent mx-auto p-2 flex md:flex-row flex-col gap-3 '>
        <div  className=' md:w-[60%] w-full p-2'>
         <div className=' text-white  md:text-3xl text-xl'>{courseData?.courseName}</div>
         <div className=' text-[#999DAA]  text-sm md:text-lg font-inter mt-5 '>{courseData?.courseDescription}</div>
         <div className=' text-richblack-50 text-sm md:text-lg mt-5'>Instructor name : {courseData?.instructor?.firstName}</div>
         <div></div>
         </div>
         <div className='w-full md:w-[30%] bg-[#161D29] md:absolute md:top-7 md:right-5 '>
          <img src={courseData?.thumbnail} alt='course Image' className='w-full aspect-video rounded-md'/>
          <p className=' text-richblack-25 text-lg md:text-2xl mt-2 mx-[5%] p-2 '>Rs. {courseData?.price}</p>

          <button className=' text-richblack-800 bg-yellow-50 w-[80%] mx-[10%]  p-2 rounded-md'  onClick={
            courseData?.studentEnrolled?.includes(user?._id) ? (()=>navigate("/dashboard/enrolled-courses")):(handleBuyCourse)
          }>
           {
            courseData?.studentEnrolled?.includes(user?._id) ? ("Go to course"):(" Buy now")

           }</button>
          <button className={ `${courseData?.studentEnrolled?.includes(user?._id) ? "hidden bg-yellow-5":("block")}text-richblack-25 bg-richblack-600  w-[80%] mx-[10%] p-2 rounded-md mt-4`}
          onClick={handlecart}  >Add to cart </button>
          <div className=' text-richblack-25 text-xs md:text-sm mt-8  p-2 mx-[5%] '>This course includes</div>
          <div className=' flex flex-col gap-1 text-[#06D6A0] p-2 mx-[6%] text-xs md:text-xs'>
           
                <li>Full Lifetime access</li>
                <li>Certificate of completion</li>
                <li>Access on Mobile and TV</li>
            
          </div>
         </div>

        </div>

        </div>

        {/* what you will learn */}
        <div className=' w-11/12 mx-auto max-w-maxContent  text-richblack-5 p-2'>
            <h1 className=' text-2xl md:text-2xl  mt-5'>What you'll learn</h1>
            <div className=' mt-2 p-4  md:w-[60%] text-sm md:text-lg text-richblack-100'>{courseData?.whatWillYouLearn}</div>

        </div>
        {/* course content */}
        <diV className="w-11/12 max-w-maxContent p-2 mx-auto">
        <div className=' text-richblack-25 mt-12  md:text-3xl text-xl'>Course Content</div>
        <div className='  text-sm text-[#C5C7D4] md:text-lg mt-2'> {TotalSection} sections • {lecture} lectures </div>
        </diV>
     
    </div>
  )
}

export default CourseDetails
