import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ShowQuote = ({ quote }) => {

    const { text, author } = quote;

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='mb-10  hover:shadow-2xl  bg-white p-10' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            <blockquote>
                <p className='md:text-xl'>{text}.</p>
                <cite className='md:text-xl'>- {author}</cite>
            </blockquote>
        </div>
    );
};

export default ShowQuote;