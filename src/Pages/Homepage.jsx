import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import CABuuton from '../Components/Cors/Homepage/CABuuton'
import Banner from "../assets/Images/banner.mp4"
import CodeElement from '../Components/Cors/Homepage/CodeElement'
import DynamicCode from '../Components/Cors/Homepage/DynamicCode'
import TimeLine from '../Components/Cors/Homepage/TimeLine'
import AfterTimeLine from '../Components/Cors/Homepage/AfterTimeLine'
import Instructor from '../Components/Cors/Homepage/Instructor'
import Explore from '../Components/Cors/Homepage/Explore'
const Homepage = () => {
  return (
    <>
    {/* section 1 */}
    <div className='flex flex-col w-11/12  border border-white mx-auto items-center justify-between  max-w-maxContent  text-white '>
    <Link to={"/signup"}>
        <div className='  group mt-16 p-1  bg-[#161D29]  rounded-full  font-bold   transition-all duration-200  hover:scale-110  text-pure-greys-50'>
            <div className='flex items-center justify-between p-3 gap-2 rounded-full transition-all duration-200 group-hover:bg-richblack-900 shadow-lg shadow-richblack-700'>
                <p>Become instructor</p>
                <FaArrowRight/>
            </div>
        </div>
    </Link>

    <div className=' text-center  text-pure-greys-5 font-semibold  md:text-4xl text-2xl mt-7'>
        Empower Your Future with <span className=' font-semibold text-richblue-300'> Coding Skills</span>
    </div>

    <div className='  mt-4 text-center p-2 text-lg font-bold  text-richblack-300  w-[80%]'>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
    </div>

    <div className='flex items-center justify-between gap-7 mt-4'>
    <CABuuton active={true} linkto={"/signup"}>Learn more</CABuuton>
    <CABuuton active={false} linkto={"/login"}>Book a Demo</CABuuton>
    </div>

    <div className='w-[60%] md:w-[40%] mx-4 my-12        '>
        <video
        muted
        autoPlay
        loop
         >
          <source src={Banner} />
        </video>
    </div>
   
     {/* code for the text and the html code */}
     <div className='flex lg:flex-row flex-col flex-wrap  gap-1 justify-between items-center  mt-7   '>
      <CodeElement
        heading={<div className='md:text-2xl  text-xl font-semibold text-white '>
            Unlock your <span className=' text-[#1FA2FF] '>coding potential</span> with our online courses.
        </div>}
        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
        cabutton1={{
            active:true,
            linkto:"/signup",
            text:"Try it Yourself"
        }}
        cabutton2={{
            active:false,
            linkto:"/login",
            text:"Learn more"
        }}
      />
      <DynamicCode
        content={`<<!DOCTYPE html >> \n <html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n
        <h1><a href="/">Header</a></h1>\n<nav>`}
        direction={true}
      />
     </div>

     <div className='flex lg:flex-row flex-col-reverse flex-wrap justify-between items-center mt-24  sm:mt-9 '>

     <DynamicCode
        content={`<<!DOCTYPE html >> \n <html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n
        <h1><a href="/">Header</a></h1>\n<nav>`}
        direction={false}
      />

      <CodeElement
        heading={<div className='md:text-2xl  text-xl font-semibold text-white '>
            Start<span className=' text-[#1FA2FF] '> coding in a second</span> 
        </div>}
        subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
        cabutton1={{
            active:true,
            linkto:"/signup",
            text:"Continue Lesson"
        }}
        cabutton2={{
            active:false,
            linkto:"/login",
            text:"Learn more"
        }}
      />
      
     </div>

     <Explore/>
    </div>
   

    {/* section 2 */}
    <div className=' bg-white'>
    <div className='homepage_bg  h-[300px]'>

        <div className='w-11/12 max-w-maxContent flex  flex-col items-center border border-black mx-auto '>
        <div className='flex flex-row gap-16 mt-[150px] '>
         <CABuuton active={true} linkto={"/signup"}>
            <div className='flex flex-row items-center gap-2'>
                Explore all category
                <FaArrowRight/>
            </div>
        </CABuuton>
        <CABuuton active={false} linkto={"/"}>
          Learn More
        </CABuuton>
        </div>

        </div>
        </div>

       <div className='w-11/12 max-w-maxContent flex  flex-col  justify-between items-center border border-black mx-auto '>
         <div className='flex md:flex-row flex-col item-center gap-11 mt-11'>
         <div className=' font-inter text-black  md:w-[50%]  font-semibold text-4xl'>
         Get the skills you need for a <span className='text-[#1FA2FF]'>job that is in demand</span>
         </div>
         <div className='flex flex-col  justify-between gap-8'>
             <div className='text-[#2C333F]  text-[15px]'> The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
             <div className='md:w-[20%]'>
             <CABuuton active={true} linkto={"/"}> Learn More</CABuuton>
             </div>
             

         </div>
        

         </div>

         {/* inside the bg white and after the Get the skills */}
         <TimeLine/>

         {/* after the time line */}
         <AfterTimeLine/>



       </div>

    </div>

    <div className=' w-11/12 max-w-maxContent flex  flex-col items-center border border-white mx-auto' >
        <Instructor></Instructor>
    </div>
    {/* section3 */}
    <div></div>
    </>
  )
}

export default Homepage