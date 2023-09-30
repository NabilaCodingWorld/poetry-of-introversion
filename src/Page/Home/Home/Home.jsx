import React from 'react';
import Banner from '../Banner/Banner';
import Goal from '../Goal/Goal';
import Hobby from '../Hobby/Hobby';
import Photo from '../Photo/Photo';
import Quote from '../Quote/Quote';
import Personality from '../Personality/Personality';
import Coffee from '../Coffee/Coffee';
import rocket from '../../../assets/rocket-png-40793.png'
import { Helmet } from 'react-helmet-async';


const Home = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='overflow-hidden'>

      <Helmet>
        <title> Poetry Of Introversion | Home </title>
      </Helmet>

      <Banner></Banner>
      <Goal></Goal>
      <Coffee></Coffee>
      <Hobby></Hobby>
      <Photo></Photo>
      <Quote></Quote>
      <Personality></Personality>

      <div className="md:ml-[1290px] ml-2 mt-10" style={{ position: 'fixed', top: '500px', width: '100%', zIndex: '1' }}> <br /> <br />
        {/* Your portfolio content */}
        <button onClick={scrollToTop}>
          {/* <FaArrowUp className='w-10 h-5 text-yellow-700'></FaArrowUp> */}
          <img className='h-8 w-8 md:h-12 md:w-12 ' src={rocket} alt="" />
        </button>
      </div> <br /> <br />
    </div>
  );
};

export default Home;

{/*  */ }