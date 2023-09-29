import React, { useEffect } from 'react';
import img from '../../../assets/long-haired-girl-flower-chaplet_1398-273.jpg'
import './Goal.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Goal = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (

        <div className='overflow-hidden'>
            <div className="divider my-20 mx-10 md:text-2xl">Why I Love Lonelyness</div>
            <div className='my-20 grid md:grid-cols-2 gap-10 md:mx-10 mx-4 justify-center items-center'>
                
                <div  data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className='myImage'>
                    <div id="zooms-Ins">
                        <figure>
                            <img className='md:w-full w-80' src={img} alt="" />
                        </figure>
                    </div>
                </div>

                <h1 data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className='md:text-xl'>Loving solitude or loneliness can be a deeply enriching experience for those who embrace it. It offers a unique opportunity for self-reflection, allowing individuals to delve into their inner thoughts and emotions, and gain a clearer understanding of their values and aspirations. Moreover, solitude is often a haven for creativity, serving as a fertile ground where novel ideas, artistic expressions, and innovative concepts can flourish. In the quiet of loneliness, the mind can wander freely, and individuals often discover a wellspring of inspiration. Additionally, solitude provides a respite from the hustle and bustle of daily life, offering peace and tranquility that can be restorative for the soul. Ultimately, embracing loneliness can be a pathway to personal growth and a deeper connection with oneself.</h1>
            </div>
        </div>
    );
};

export default Goal;