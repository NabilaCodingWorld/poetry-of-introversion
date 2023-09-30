import React, { useEffect } from 'react';
import bgVideoContact from '../../assets/video (2160p).mp4'
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div>
            <div className="daily-blogs">

                <div className="divider my-20 mx-10 md:text-2xl text-white">Stay In Touch</div>

                <video autoPlay loop muted className="video-backgrounds">
                    <source src={bgVideoContact} type="video/mp4" />
                </video>


                <div className="contents">

                    
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                        <form>

                            <div className="md:max-w-md md:w-[1000px] bg-black p-10 bg-opacity-50 text-black  mx-auto">
                                <label className="block  font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                    Name
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    id="to_name"
                                    type="text"
                                    name="to_name"
                                    placeholder="Enter your name"
                                />

                                <label className="block  font-bold mt-4 text-white text-xl" htmlFor="from_name">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="from_name"
                                    type="email"
                                    name="from_name"
                                    placeholder="Enter your email"
                                />

                                <label className="block  font-bold mt-4 text-white text-xl" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="5"
                                />

                                <input
                                    style={{
                                        background:
                                            'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                                        color: '#fff', // Text color
                                        border: 'none', // Remove the border
                                        padding: '10px 20px', // Adjust padding for better appearance
                                        borderRadius: '5px', // Add border radius for rounded corners
                                        cursor: 'pointer', // Change cursor on hover
                                    }}
                                    type="submit"
                                    value="Send"
                                />

                            </div>



                        </form>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Contact;