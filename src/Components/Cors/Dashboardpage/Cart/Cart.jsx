import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseCard from './CourseCard'
import { useNavigate } from 'react-router'
import { buyCourse } from '../../../../service/operations/studentFeaturesAPI'

const Cart = () => {
    const {cart,total,totalItems}=useSelector(state=>state.cart)  //total is the price of the total item
       const{token}=useSelector(state=>state.auth)
       const{user}=useSelector(state=>state.profile)
       const dispatch=useDispatch()
       const navigate=useNavigate()
     console.log("This the cart",cart)
    //  courses if
    const course_id= cart.map(item=>{
      return item._id
    })
    // console.log("The course id are ",course_id)
     const handlepayment=async()=>{
      if(token){
        const result=await buyCourse(token,course_id,user,navigate,dispatch)
      }
      // alert("Please Login again Something went wrong")
      // navigate("/login" )   
     }
  return (
    <>
      <div className=' mt-[3.5rem]'>
          <div className=' text-xl md:text-3xl text-richblack-25'> My Cart</div>
           <div className=' text-[#6E727F] text-sm md:text-xl mt-7'>{totalItems} course are present in cart</div>
           <div className='border border-richblack-400'></div>
           {/* for the courses and other */}
           <div className=' flex md:flex-row flex-col p-2 gap-7 text-richblack-100 mt-5  w-full'>
            <div className=' w-[60%]'>
                {
                    cart?.length>0 ?(<div>
                        {cart?.map((item,index)=>{
                            return <CourseCard course={item} key={index}/>
                        })}
                    </div>):(<div>Your cart is empty</div>)
                }
            </div>
            { 
              cart?.length>0 &&   <div className=' w-full md:w-[30%]  bg-[#161D29]   p-5 md:p-10 flex flex-col items-start rounded-lg'>
                <span className=' text-xs text-[#6E727F]'>Total cost of {totalItems} course</span>
                <span className=' text-yellow-100 text-xl mt-2'>Rs {total}</span>
                <button className='  w-full md:mx-auto bg-[#FFD60A] text-richblack-700 text-lg md:text-xl mt-3 p-2 rounded-md'onClick={handlepayment} > By now</button>

            </div>
            }
            
           </div>
      </div>
    </>
  )
}

export default Cart