import React from 'react';

const ShowQuote = ({ quote }) => {

    const { text, author } = quote;

    return (
        <div className='mb-10 shadow-lg p-5'>
            <blockquote>
                <p className='text-xl'>{text}.</p>
                <cite className='text-xl'>- {author}</cite>
            </blockquote>
        </div>
    );
};

export default ShowQuote;