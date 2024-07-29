import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from './Card'
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Styles for Navigation module
import 'swiper/css/pagination'; // Styles for Pagination module
import 'swiper/css/scrollbar'; // Styles for Scrollbar module
// import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper'

const Category_slider = ({courses}) => {
  return (
    <div className='mt-5'>
       {
        courses?.length>0 ? (
         <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // navigation={true}
      loop={true}
      autoplay={{
                    delay: 100,
                    disableOnInteraction: true,
                    }}
      breakpoints={{
                        1024:{slidesPerView:2,}
                    }}
            >
        {
            courses.map((course,key)=>{
                return <SwiperSlide><Card course={course}/></SwiperSlide>
            })
        }
         </Swiper>
        ):(<div className=' text-richblack-50 md:text-xl text-lg'>  NO course found Related to the Category</div>)
       }
    </div>
  )
}

export default Category_slider