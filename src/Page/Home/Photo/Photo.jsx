import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/traffic-jam_53876-42983.avif'

import img2 from '../../../assets/rainforest-doi-inthanon-national-park-thailand_44074-5615.jpg'

import img3 from '../../../assets/beautiful-accommodation-middle-mist-khao-kho-phetchabun-province-thailand_34138-355.jpg'

import img4 from '../../../assets/sale-jpg-file_986060-6 (1).jpg'

import img5 from '../../../assets/abstract-magical-image-firefly-flying-night-forest-fairy-tale-concept_21085-1122.jpg'

const Photo = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='overflow-hidden'>

            <div className="divider my-20 md:mx-10 mx-4 text-2xl">Some Photos</div>

            <div className='mx-10 mb-10 border-2 p-5'  data-aos="flip-up" data-aos-offset="200" data-aos-duration="1000">
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
                        <img  src={img1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img  src={img2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className=' md:h-72' src={img3} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className=' md:h-72' src={img4} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className=' md:h-72' src={img5} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Photo;
