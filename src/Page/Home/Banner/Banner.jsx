import React from 'react';
import './Banner.css'

import bgVideo from '../../../assets/production_id_4237200 (2160p).mp4'

const Banner = () => {


    return (
        <div className="daily-blog">
            <video autoPlay loop muted className="video-background">
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h1 className='text-4xl text-center'>Welcome To My Introversion World</h1>
            </div>
        </div>

    );
};

export default Banner;