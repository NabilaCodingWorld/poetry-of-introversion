import React from 'react';
import Banner from '../Banner/Banner';
import Goal from '../Goal/Goal';
import Hobby from '../Hobby/Hobby';
import Photo from '../Photo/Photo';
import Quote from '../Quote/Quote';
import Personality from '../Personality/Personality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Goal></Goal>
            <Hobby></Hobby>
            <Photo></Photo>
            <Quote></Quote>
            <Personality></Personality>
        </div>
    );
};

export default Home;