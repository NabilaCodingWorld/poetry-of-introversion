import React, { useEffect } from 'react';
import './DailyUseBlog.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaComment, FaHeart } from 'react-icons/fa';

const DailyUseBlog = ({ dailyBlog }) => {

    const { img, author, text, _id, date } = dailyBlog;

    // Define a maximum character limit for the description
    const maxDescriptionLength = 200;

    // Truncate the description if it exceeds the maximum length
    const truncatedDescription = text.length > maxDescriptionLength
        ? text.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : text;

    

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);


    return (
        <div className='overflow-hidden' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">

        
            <div className='image'>
                <div id="zoom-In">
                    <figure>
                        <img className='md:w-full w-80' src={img} alt="" />
                    </figure>
                </div>
            </div>
            <p className='text-gray-400 text-center my-2'>{date}</p>


            <p className='text-center  md:text-xl mt-3'>{author}</p>

            <p className='my-5 md:text-xl text-sm'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/destination/${_id}`}> See More </Link> </span> </p>

            <div className='flex gap-10'>
                <p> <FaHeart className='md:w-8 md:h-8 text-red-700'></FaHeart> </p>
                <p> <FaComment className='md:w-8 md:h-8 text-blue-700'></FaComment> </p>
            </div>
        </div>
    );
};

export default DailyUseBlog;