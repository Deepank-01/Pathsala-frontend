import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { addCourseDetails, fetchCourseCategories } from '../../../../../service/operations/courseDetailsAPI'
import { FaImage, FaUpload } from 'react-icons/fa'
import { setCourse, setStep } from '../../../../../Slice/courseSlice'

const InfoDetails = () => {
  const dispatch=useDispatch()
  const {course,  editCourse}=useSelector(state=>state.course)
  const {token}=useSelector(state=>state.auth)
  const [loading, setLoading] = useState(false);
  const inputRef= useRef(null)
  const [courseCategories, setCourseCategories] = useState([]);
  const [formdata,setformdata]=useState({
    courseTitle:"",
    courseShortDesc:"",
    coursePrice:null,
    courseTags:"",
    courseBenefits      :"",     
    courseCategory:"",
    courseRequirements:"",
    courseImage :null,

  })
  const { courseTitle,
    courseShortDesc,
    coursePrice,
    
    courseTags,
    courseBenefits   ,    
    courseCategory,
    courseRequirements,
    courseImage }=formdata

    const handlevalue =(e)=>{
      if([e.target.name]== "courseImage"){
        setformdata((prev)=>{
          return {
            ...prev,
            [e.target.name]:e.target.files[0]
          }
        })
      }
      else{
        setformdata((prev)=>{
          return {
            ...prev,
            [e.target.name]:e.target.value
          }
        })
      }
      
      console.log(formdata)
    }


    const getcategory=async()=>{
      setLoading(true);
         const category=await fetchCourseCategories()
         if(category.length>0){
          setCourseCategories(category)
         }
         setLoading(false);
    }
    useEffect(()=>{
     getcategory()
    //  console.log(formdata)
    },[])

  // for the thumbnail
  const handleImageClick=()=>{
    inputRef.current.click()
  }

  const handlesubmit=async(event)=>{
   event.preventDefault()
   const data={
    courseName:courseTitle,
    courseDescription:courseShortDesc,
    price:coursePrice,
    whatWillYouLearn: courseBenefits,
    category:courseCategory,
    instructions:courseRequirements,
    tag:courseTags,
    thumbnailImage:courseImage,
   }

  //  console.log(data)
   setLoading(true)
   const result= await addCourseDetails(data,token)
   if(result){
    // call success and course added successfully 
     dispatch(setStep(2))
     dispatch(setCourse(result))
   }
   setLoading(false);
   console.log("PRINTING FORMDATA", data);
   console.log("PRINTING result", result);
  }

  return (
    <>
    
      <form className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8 md:text-lg text-xs" onSubmit={handlesubmit}>
        <div>
          <label
            
            className=" text-[#F1F2FF] text-xs md:text-xl"
          >
            Course Title<sup className=" text-[#EF476F]">  *</sup>
          </label>
          <input
           required="true"
            id="courseTitle"
            placeholder="Enter Course Title"
            name="courseTitle"
            value={courseTitle}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-[#424854] mt-6 p-[12px] text-richblack-5 "
            onChange={handlevalue}
          />
        </div>

        <div>
          <label className=" text-[#F1F2FF] text-xs md:text-xl">
            Course Short Description<sup className=" text-[#EF476F]">*</sup>
          </label>
          <textarea
           required="true"
            placeholder="Enter Description"
            name="courseShortDesc"
            value={courseShortDesc}
            className=" min-h-[140px] w-full rounded-[0.5rem] bg-[#424854] mt-6 p-[12px] text-richblack-5 border border-richblack-500 "
            onChange={handlevalue}
          />
        </div>

        <div>
          <label className=" text-[#F1F2FF] text-xs md:text-xl">
          Course Price<sup className=" text-[#EF476F]">*</sup>
          </label>
          <div className=' relative'>
          <input
           required="true"
            placeholder="Enter price"
            name="coursePrice"
            value={coursePrice}
            type='number'
            className=" w-full rounded-[0.5rem] md:text-xl text-xs  mt-6 bg-[#424854] p-[12px] px-11 text-richblack-5 border border-richblack-500 "
            onChange={handlevalue}
          />
          <div className=' text-richblack-400 absolute  top-7 md:top-9 p-1 '><HiOutlineCurrencyRupee  size={30}/></div>
          
          </div>
        </div>
          

        <div>
          <label
            
            className=" text-[#F1F2FF] text-xs md:text-lg"
          >
            Course Category  <sup className=" text-[#EF476F]">  *</sup>
          </label>
           <select
            required="true"
            value={courseCategory}
            name='courseCategory'
            onChange={handlevalue}
             className='w-full rounded-[0.5rem]  bg-[#424854] p-[12px] text-richblack-5 text-xs  md:text-lg mt-4'
           >
            <option value=""  className=' '>choose a Category</option>
            {
               courseCategories.map(item=>{
                return  <option value={item._id}  className=''>{item.name}</option>
                 
               })
            }
           </select>
        </div>

        {/* imput of  the image */}
        
        <div >
          <label
           
            className=" text-[#F1F2FF] text-xs md:text-xl"
          >
            Thumbnail<sup className=" text-[#EF476F]">*</sup>
          </label>
          <div className=' min-h-[200px] w-full mx-auto  bg-[#424854] md:w-[60%] p-[12px] rounded-lg   flex flex-col items-center justify-around'
          onClick={handleImageClick}>
          <div className=' text-[#FFD60A]'>
          {
            courseImage?(<img src={URL.createObjectURL(courseImage)} className=' w-full  h-[150px] md:h-[200px]'/>):( <FaUpload size={30}/>)
          }
          </div>
          
          <input
           required="true"
            type='file'
            ref={inputRef}
            name="courseImage"
            // value={courseTitle}
            className=" text-[#FFD60A] hidden"
            onChange={handlevalue}
              accept="image/*"
          />
          </div>
        </div>
          
        <div>
          <label
            htmlFor="courseTitle"
            className=" text-[#F1F2FF] text-xs md:text-xl"
          >
            Tags  <sup className=" text-[#EF476F]">  *</sup>
          </label>
          <input
              required="true" 
            placeholder="Enter Course Title"
            name="courseTags"
            value={courseTags}
          
            className="w-full rounded-[0.5rem] bg-[#424854] mt-6 p-[12px] text-richblack-5 "
            onChange={handlevalue}
          />
        </div>
     
        <div>
          <label
            htmlFor="courseTitle"
            className=" text-[#F1F2FF] text-xs md:text-xl"
          >
            Benefits  <sup className=" text-[#EF476F]">  *</sup>
          </label>
          <textarea
             required="true"
            placeholder="Enter Course Title"
            name="courseBenefits"
            value={courseBenefits}
          
            className="min-h-[100px] w-full rounded-[0.5rem] bg-[#424854] mt-6 p-[12px] text-richblack-5 "
            onChange={handlevalue}
          />
        </div>
        <div>
          <label
           
            className=" text-[#F1F2FF] text-xs md:text-xl"
          >
            Requirements <sup className=" text-[#EF476F]">  *</sup>
          </label>
          <input
            
            placeholder="Enter Any pre-knowledge required"
            name="courseRequirements"
            value={courseRequirements}
            required="true"
            className="w-full rounded-[0.5rem] bg-[#424854] mt-6 p-[12px] text-richblack-5 "
            onChange={handlevalue}
          />
        </div>
         <button className=' text-richblack-700 bg-yellow-200 shadow-lg transition-all duration-200 hover:shadow-richblack-300 hover:scale-105 hover:rounded-2xl  rounded-lg p-5  text-xs  md:text-lg ' type='submit'>
          Save and Next
         </button>
      </form>
    </>
  );
}

export default InfoDetails