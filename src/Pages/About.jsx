import React from 'react'
import Formdata from '../Components/Cors/Aboutpage/Formdata'
import Footer from '../Components/Common/Footer'

const About = () => {
  return (
   <>
    <div className='w-11/12 max-w-maxContent mx-auto border border-white flex flex-col mt-[10vh]'>
    {/* sectiton for the about us */}
    <section className='w-[100%] flex flex-col '>
    {/* used for the Heading */}
     <div className=' flex flex-col gap-6 w-[70%] md:w-[50%] mx-auto'>
        <p className='  text-center text-[#F1F2FF] md:text-3xl text-xl'>Driving Innovation in Online Education for <span className=' text-[#1FA2FF]'>a Brighter Future</span></p>
        <div className='text-[#838894] text-xs md:text-sm text-center'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</div>
     </div>

     {/* for the image and text part */}
     <div className='w-[100%] flex flex-wrap justify-between items-center p-2 gap-7 md:mt-16 md:mb-12 '>
      <div className=' flex flex-col items-start md:w-[40%] gap-4   border  bg-richblack-900/90  shadow-lg rounded-lg p-4 shadow-richblack-700 transition-all duration-200 hover:scale-110 hover:shadow-[#1FA2FF]  '>
         <h1 className='text-[#E65C00] text-xl md:text-2xl p-2'>Our Vision</h1>
         <div className='text-[#838894] text-xs md:text-sm p-2'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</div>
      </div>

      <div className=' flex flex-col items-start  md:w-[40%] gap-4  border  bg-richblack-900/90  shadow-lg rounded-lg p-4  shadow-richblack-700 hover:shadow-[#E65C00] transition-all duration-200 hover:scale-105 '>
         
         <h1 className='text-[#1FA2FF] text-xl md:text-2xl p-2'>Our Mission</h1>
         <div className='text-[#838894] text-xs md:text-sm p-2 bg-transparent'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</div>
      </div>
     </div>
    </section>
     {/* section for the form  */}
     <section className='mt-10'>
      <Formdata/>
     </section>
    
    </div>
    <div className=' mt-10'><Footer/></div>
    </>
  )
}

export default About