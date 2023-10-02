import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const NovelDetails = () => {

    const novel = useLoaderData();

    const { author, text, date, image } = novel;

    console.log(novel)

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='overflow-hidden bg-gray-300'>

            <Helmet>
                <title> Poetry Of Introversion | Novel Detail </title>
            </Helmet>

            <div className="divider my-20 mx-10 md:text-2xl">{author}</div>

            <div className='bg-white p-10 mb-5 mx-10'>
                <center>


                    <figure>
                        <img className='w-[80%] h-[50%]' src={image} alt="" />
                    </figure>


                    <p className='text-gray-400 mt-2'>{date}</p>
                </center>

                <p data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className='my-5 md:mx-10 md:text-xl mx-4'>{text}</p>
            </div>

            <center>
                <Link to="/novel"> <button
                    style={{
                        background:
                            'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                        color: '#fff', // Text color
                        border: 'none', // Remove the border
                        padding: '10px 20px', // Adjust padding for better appearance
                        borderRadius: '5px', // Add border radius for rounded corners
                        cursor: 'pointer', // Change cursor on hover
                    }}

                >Back</button> </Link>
            </center> <br />

        </div>
    );
};

export default NovelDetails;