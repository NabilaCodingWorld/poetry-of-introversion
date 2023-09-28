import React, { useEffect, useState } from 'react';
import './NovelReview.css'
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import { FaComment, FaHeart } from 'react-icons/fa';

const NovelReview = ({ novel }) => {

    const { image, author, text, _id } = novel;

    // Define a maximum character limit for the description
    const maxDescriptionLength = 500;

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
        <div> <br />

            <p className='text-center mb-2'>
                <span className='text-gray-400 text-center'>{formattedDateTime}</span>
            </p>

            <div className='grid md:grid-cols-2 gap-10 justify-center items-center mx-10 my-10'>
                <div className='images'>
                    <div id="zoom-Ins">
                        <figure>
                            <img className='md:w-full w-80' src={image} alt="" />
                        </figure>
                    </div>
                </div>

                <div>
                    <p className='text-center text-2xl mb-4'>{author}</p>

                    <p className='my-5 md:text-xl text-sm'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/destination/${_id}`}> See More </Link> </span> </p>

                    <div className='flex gap-10'>
                        <p> <FaHeart className='w-8 h-8 text-red-700'></FaHeart> </p>
                        <p> <FaComment className='w-8 h-8 text-blue-700'></FaComment> </p>
                    </div>

                </div>

                <div className="divider ml-36 w-[800px]"></div>
            </div>
        </div>
    );
};

export default NovelReview;