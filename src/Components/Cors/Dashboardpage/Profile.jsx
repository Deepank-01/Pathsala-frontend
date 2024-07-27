import React from 'react'
import { useSelector } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import Profile_personal from './Profile_personal';
const Profile = () => {
    const {user}=useSelector(state=>state.profile)

  return (
   
    <div className='mt-[2rem] w-[100%]' >
        <h1 className=' text-[#F1F2FF] md:text-3xl mb-12'>My profile</h1>
             
         <div className='flex flex-col gap-5   w-[100%] md:w-[90%]  items-center '>
           {/* card1 */}
           <div className='flex  items-center justify-between bg-[#2C333F] p-4 w-[90%] rounded-lg flex-wrap  gap-9 md:gap-0'>
           {/* for the image and name  */}
           <div className='flex item-center gap-6 '>
           <img src={user.image}  className='  size-8 md:size-12 rounded-lg '/>
           <div>
            <h3 className='text-[#F1F2FF] text-xs'>{user.firstName} {user.lastName}</h3>
            <span className=' text-[#838894] text-xs'>{user.email}</span>
           </div>
           </div>
           {/* for the Edit option */}
            <button className='flex px-4 md:w-[10%] h-[30px] md:h-[50px]  items-center  justify-between  text-richblack-800 bg-yellow-100 rounded-lg'> 
            <CiEdit size={20}/>
            <span className=' text-sm'>Edit</span>
            </button>
           </div>

           {/* card 2 */}
           <div className='flex flex-wrap md:flex-row items-center justify-between bg-[#2C333F] p-4 w-[90%] rounded-lg   gap-9 md:gap-0'>
           {/* for About section*/}
           <div className=' flex flex-col gap-6 p-2 items-start'>
           <div className='  text-xs md:text-2xl text-[#F1F2FF]  '>About</div>
           <div className=' text-[#838894]  md:text-sm text-xs'>
            {user.additionalDetails.about ? (`${user.additionalDetails.about}`):("write about yorself")}
           </div>

           </div>
           
           {/* for the Edit option */}
            <button className='flex px-4 md:w-[10%] h-[30px] md:h-[50px]  items-center  justify-between  text-richblack-800 bg-yellow-100 rounded-lg'> 
            <CiEdit size={20}/>
            <span className=' text-sm'>Edit</span>
            </button>
           </div>

           {/* card 3 */}
         <div className=' flex flex-col items-start  bg-[#2C333F] p-4 w-[90%] rounded-lg '> 
         <div className=' flex  flex-row items-center justify-between w-[100%]'>
          <div className='  text-sm md:text-xl text-[#F1F2FF] '>Personal Details </div>
          <button className='flex px-4 md:w-[10%] h-[30px] md:h-[50px]  items-center  justify-between  text-richblack-800 bg-yellow-100 rounded-lg'> 
            <CiEdit size={20}/>
            <span className=' text-sm'>Edit</span>
            </button>
         </div>

        
            <Profile_personal text1={"FirstName"} value1={user.firstName} text2={"Last Name"} value2={user.lastName} />
            <Profile_personal text1={"Email"} value1={user.email} text2={"Phone Number"} value2={user.additionalDetails.contactNumber ? user.additionalDetails.contactNumber : "Add phone Number"}/>
         
          </div>


         </div>    


    </div>
  )
}

export default Profile