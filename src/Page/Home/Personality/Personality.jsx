import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Personality = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className="divider my-20 mx-10 text-2xl">My Personality</div>

            <div className='grid md:grid-cols-3 gap-10 mx-10 text-center mb-10 text-2xl '>

                <div data-aos="flip-left" data-aos-offset="200" data-aos-duration="1000" className='shadow-lg p-5'>
                    <center>
                        <img  className='w-[100%] mb-3 hover:translate-y-2 duration-700' src="https://img.freepik.com/free-photo/close-up-cheerful-small-blonde-haired-girl-with-blue-eyes-holding-hair-with-hands-looking-aside-with-happy-relaxed-expression_176420-10177.jpg?w=740&t=st=1695921730~exp=1695922330~hmac=2003a1f40e71f122a585524de03b0137d0cca5d822c8a6d0a4986ebfa9345806" alt="" />
                    </center>
                    <p>Innocence</p>
                    <CountUp
                        start={10}
                        end={90}
                        duration={2.75}
                    >
                    </CountUp>
                </div>


                <div data-aos="flip-left" data-aos-offset="200" data-aos-duration="1000" className='shadow-lg p-5'>
                    <center>
                        <img  className='w-[100%] mb-3 hover:-translate-y-2 duration-700' src="https://img.freepik.com/free-photo/attractive-woman-with-charming-smile_176532-10368.jpg?w=740&t=st=1695980070~exp=1695980670~hmac=c368b4858e52c54792845ce8241ffedb086e70f911e6ac6496a89234470dde59" alt="" />
                    </center>
                    <p>Cuteness</p>
                    <CountUp
                        start={10}
                        end={70}
                        duration={2.75}
                    >

                    </CountUp>
                </div >

                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className='shadow-lg p-5'>

                    <center>

                        <img  className='w-[100%] mb-3 hover:translate-y-2 duration-700' src="https://img.freepik.com/free-photo/portrait-hopeful-smiling-redhead-woman-holding-hands-heart-looking-tender-camera-being-touched-say-thank-you-being-pleased-heartfelt-standing-against-white-background_176420-46538.jpg?w=740&t=st=1695980343~exp=1695980943~hmac=16a18b32fb068bd710fbe8d3c9d0b4e84741ab6f33b2d7a0c5e5a349b80d97d4" alt="" class="transform transition-transform duration-300 group-hover:scale-110" />

                    </center>
                    <p>Kindness</p>
                    <CountUp
                        start={10}
                        end={20}
                        duration={2.75}
                    >

                    </CountUp>
                </div>

                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className='shadow-lg p-5'>
                    <center>
                        <img  className='w-[100%] mb-3 hover:translate-y-2 duration-700' src="https://img.freepik.com/free-photo/close-up-blonde-woman-outdoors_23-2147617400.jpg?w=740&t=st=1695980493~exp=1695981093~hmac=922e85e8e8ea9b680a0e486fb1d122dbf45afb51644c82f8eb006aae6f70ceeb" alt="" />
                    </center>
                    <p>Wilderness</p>
                    <CountUp
                        start={10}
                        end={100}
                        duration={2.75}
                    >

                    </CountUp>
                </div>

                <div data-aos="flip-left" data-aos-offset="200" data-aos-duration="1000" className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3 hover:translate-y-2 duration-700' src="https://img.freepik.com/free-photo/studio-shot-brunette-girl-casual-outfit_176420-28529.jpg?w=740&t=st=1695980677~exp=1695981277~hmac=2ffa37216458e0087f44e324626d137fd0a0061cd9daba2980150ed2016712a7" alt="" />
                    </center>
                    <p>Honesty</p>
                    <CountUp
                        start={10}
                        end={90}
                        duration={2.75}
                    >
                    </CountUp>
                </div>

                <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3 hover:translate-y-2 duration-700' src="https://img.freepik.com/free-photo/young-girl-with-long-hair-wearing-colorful-dress-looking-camera-with-serious-face_141793-28867.jpg?w=740&t=st=1695980883~exp=1695981483~hmac=da46837b41d97f436800b51e2273ecf58c0bb27b0a2395c72e712b739d4ebc4a" alt="" />
                    </center>
                    <p>Introvert</p>
                    <CountUp
                        start={10}
                        end={110}
                        duration={2.75}
                    >
                    </CountUp>
                </div>

            </div>
        </div>

    );
};

export default Personality;