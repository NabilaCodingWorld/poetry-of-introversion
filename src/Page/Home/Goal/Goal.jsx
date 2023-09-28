import React from 'react';
import img from '../../../assets/long-haired-girl-flower-chaplet_1398-273.jpg'
import './Goal.css'

const Goal = () => {
    return (

        <div>
            <div className="divider my-20 mx-10 text-2xl">Why I Love Lonelyness</div>
        <div className='my-20 grid md:grid-cols-2 gap-10 mx-10 justify-center items-center'>
        <div className='myImage'>
                    <div id="zooms-Ins">
                        <figure>
                            <img className='md:w-full w-80' src={img} alt="" />
                        </figure>
                    </div>
                </div>

            <h1 className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam debitis non voluptatum ratione architecto ullam sed. Dicta quibusdam odio eum recusandae, eaque totam modi voluptate asperiores! Sit sapiente quod totam.</h1>
        </div>
        </div>
    );
};

export default Goal;