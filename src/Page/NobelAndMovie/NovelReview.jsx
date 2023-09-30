import React, { useEffect} from 'react';
import './NovelReview.css'
import { Link } from 'react-router-dom';
import { FaComment, FaHeart } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NovelReview = ({ novel }) => {

    const { image, author, text, _id, date } = novel;

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
        <div className='overflow-hidden' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"> <br />

            <div >
                <div className='images'>
                    <div id="zoom-Ins">
                        <figure>
                            <img className='md:w-full w-80' src={image} alt="" />
                        </figure>
                    </div>
                </div>
                <p className='text-gray-400 text-center my-2'>{date}</p>

                <div>
                    <p className='text-center md:text-2xl mb-4 mt-4'>{author}</p>

                    <p className='my-5 md:text-xl text-sm'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/novel/${_id}`}> See More </Link> </span> </p>

                    <div className='flex gap-10'>
                        <p> <FaHeart className='md:w-8 md:h-8 text-red-700'></FaHeart> </p>
                        <p> <FaComment className='md:w-8 md:h-8 text-blue-700'></FaComment> </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default NovelReview;