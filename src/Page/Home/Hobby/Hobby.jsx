import React, { useEffect } from 'react';
import './Hobby.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hobby = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className="divider my-20 md:mx-10 mx-4 md:text-2xl">My Hobbies</div>

            {/* drawing */}

            <div  className='grid md:grid-cols-3 mx-10 my-10 gap-10'>

                <div className='p-8 bg-white' data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000">
                    <div className='myImages'>
                        <div id="zooms-In">
                            <figure>
                                <img className='md:w-full w-80' src="https://img.freepik.com/premium-photo/painting-moonlit-lake-with-tree-branch-hanging-water_104785-1979.jpg?w=740" alt="" />
                            </figure>
                        </div>
                    </div>

                    <h1 className='text-2xl text-center my-4'>Drawing</h1>
                    <p className='text-center md:text-xl'>Drawing is a form of creative expression where artists use lines, shapes, and colors to convey ideas, emotions, or scenes on paper or digital platforms. It's a powerful way to communicate, evoke feelings, and capture the beauty of the world around us. Whether it's for personal enjoyment, storytelling, or professional artistry, drawing allows individuals to bring their imagination to life through visual art.</p>
                </div>

                {/* Reading Novel */}

                <div className='p-8 bg-white' data-aos="flip-right" data-aos-offset="200" data-aos-duration="1000">


                    <div className='myImages'>
                        <div id="zooms-In">
                            <figure>
                                <img className='md:w-full w-80' src="https://img.freepik.com/free-photo/cup-coffee-with-book-dark-surface_114579-77418.jpg?w=740&t=st=1695978060~exp=1695978660~hmac=28303bd9dd5949e081a32c3dc6203046839b39eb36ddf48c95ed8bef276bfb82" alt="" />
                            </figure>
                        </div>
                    </div>

                    <h1 className='text-2xl text-center my-4'>Reading Novel</h1>
                    <p className='text-center md:text-xl'>Reading novels is an engaging and immersive activity where individuals explore fictional worlds, characters, and stories. It offers a unique escape, sparks imagination, and provides insight into diverse perspectives and experiences. Whether for entertainment, knowledge, or relaxation, novels have the power to transport readers to different times and places, making it a beloved pastime for many.</p>
                </div>

                {/* Gardening */}

                <div className='p-8 bg-white' data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000">

                    <div className='myImages'>
                        <div id="zooms-In">
                            <figure>
                                <img className='md:w-full w-80' src="https://img.freepik.com/free-photo/woman-spraying-flowers-greenhouse_23-2148396879.jpg?w=740&t=st=1695978173~exp=1695978773~hmac=4d16f7f47e189fdf27e83b47e5d43bf69eeec7e456a865200343371b4aca7b4d" alt="" />
                            </figure>
                        </div>
                    </div>

                    <h1 className='text-2xl text-center my-4'>Cultivate Flower</h1>
                    <p className='text-center md:text-xl'>Cultivating flowers involves the art of growing and nurturing various plant species for their beauty, fragrance, or symbolism. This practice brings joy through colorful blooms, enhances outdoor spaces, and supports pollinators. Whether in gardens, pots, or indoor settings, cultivating flowers allows individuals to connect with nature, express creativity, and enjoy the therapeutic benefits of gardening.</p>
                </div>
            </div>

        </div>
    );
};

export default Hobby;