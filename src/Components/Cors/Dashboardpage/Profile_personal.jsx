import React from 'react'

const Profile_personal = ({text1,value1,text2,value2}) => {
  return (
    <div className=' flex flex-row  flex-wrap md:gap-1 gap-3 w-[100%]  justify-between p-4'>
    <div  className=' flex flex-col  '>
     <span className='text-[#424854] md:text-sm text-xs'>{text1}</span>
     <span className='md:text-sm text-xs text-[#F1F2FF]'>{value1}</span>
    </div>
    <div  className=' flex flex-col  '>
     <span className='text-[#424854] md:text-sm text-xs'>{text2}</span>
     <span className='md:text-sm text-xs text-[#F1F2FF]'>{value2}</span>
    </div>

    </div>
  )
}

export default Profile_personal