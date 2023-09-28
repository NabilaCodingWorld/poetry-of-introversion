import React, { useEffect, useState } from 'react';
import './DailyUseBlog.css'
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const DailyUseBlog = ({ dailyBlog }) => {

    const { img, author, text, _id } = dailyBlog;

    // Define a maximum character limit for the description
    const maxDescriptionLength = 200;

    // Truncate the description if it exceeds the maximum length
    const truncatedDescription = text.length > maxDescriptionLength
        ? text.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : text;

    const [currentDateTime, setCurrentDateTime] = useState(moment());

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentDateTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDateTime = currentDateTime.format('MMMM Do YYYY');


    return (
        <div>
            <p className='text-center mb-2'>
                <span className='text-gray-400 text-center'>{formattedDateTime}</span>
            </p>
            <div className='image'>
                <div id="zoom-In">
                    <figure>
                        <img className='md:w-full w-80' src={img} alt="" />
                    </figure>
                </div>
            </div>

            <p className='text-center text-gray-400 text-xl mt-3'>{author}</p>

            <p className='my-5 md:text-xl text-sm'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/destination/${_id}`}> See More </Link> </span> </p>
        </div>
    );
};

export default DailyUseBlog;