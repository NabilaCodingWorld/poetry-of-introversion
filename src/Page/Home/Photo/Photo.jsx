import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img from '../../../assets/long-haired-girl-flower-chaplet_1398-273.jpg'

const Photo = () => {
    return (
        <div>

<div className="divider my-20 mx-10 text-2xl">Some Photos</div>
            
            <div className='mx-10 mb-10 border-2 p-5'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img} alt="" />
        </SwiperSlide>
        
      </Swiper>
            </div>
        </div>
    );
};

export default Photo;
