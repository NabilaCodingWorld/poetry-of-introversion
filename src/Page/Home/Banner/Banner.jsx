import React from 'react';
import './Banner.css'

import bgVideo from '../../../assets/production_id_4237200 (2160p).mp4'

const Banner = () => {


    return (
        <div className="daily-blog overflow-hidden">
            <video autoPlay loop muted className="video-background">
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h1 className='md:text-4xl text-center text-xl'>
Welcome to the introvert's world, where solitude is treasured, creativity flourishes, and deep connections thrive. Enjoy the quiet strength and inner exploration that this realm offers.</h1>
            </div>
        </div>

    );
};

export default Banner;