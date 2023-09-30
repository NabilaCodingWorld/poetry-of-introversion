import React, { useEffect, useState } from 'react';
import img from '../../../assets/istockphoto-500954400-170667a.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Coffee = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);



    return (
        <div>
            <div className="divider my-20 mx-10 md:text-2xl">Take Coffee EveryDay for Relaxation</div>

            <div className='grid md:grid-cols-2 gap-20 md:mx-10 mx-4 justify-center items-center'>

                <p data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className='md:text-xl'>Coffee is often celebrated as one of the best beverages for a variety of reasons. Its popularity spans the globe, and for good reason. Firstly, coffee is renowned for its rich and complex flavor profile, ranging from the deep, bold notes of dark roast to the bright and fruity undertones of lighter brews. This diversity in taste ensures there's a coffee to suit nearly every palate. <br />

                    Moreover, coffee is a trusted companion for many, offering a much-needed energy boost that kickstarts the day. The caffeine content in coffee provides alertness and mental clarity, helping people stay focused and productive. It's a morning ritual for countless individuals, offering comfort and routine in the form of a warm, inviting mug. <br />

                    Beyond its taste and wakefulness benefits, coffee has also been linked to numerous health advantages when consumed in moderation. Research suggests it may reduce the risk of certain diseases, including Parkinson's and type 2 diabetes. Additionally, the act of savoring a cup of coffee can provide moments of relaxation and contemplation in an otherwise hectic world. <br />

                </p>




                <div>
                    <img
                        src={img}
                        alt=""
                        className='hover:translate-x-3 duration-700'

                    />
                </div>

            </div>
        </div>
    );
};

export default Coffee;