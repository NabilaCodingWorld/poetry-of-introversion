import React from 'react';

import img from '../../../assets/there-is-cup-coffee-book-table-generative-ai_900321-41332.jpg'

const Hobby = () => {

   

    return (
        <div>
            <div className="divider my-20 mx-10 text-2xl">My Hobbies</div>

            <div className='grid md:grid-cols-3 mx-10 my-10 gap-10'>
                <div>
                    <img src={img} alt="" />
                    <h1 className='text-2xl text-center my-4'>Drawing</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt numquam hic asperiores nulla expedita, et tempora est officia, commodi eaque, nisi amet dolorem iusto minima? Ipsum odio voluptate asperiores?</p>
                </div>

                <div>
                    <img src={img} alt="" />
                    <h1 className='text-2xl text-center my-4'>Drawing</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt numquam hic asperiores nulla expedita, et tempora est officia, commodi eaque, nisi amet dolorem iusto minima? Ipsum odio voluptate asperiores?</p>
                </div>

                <div>
                    <img src={img} alt="" />
                    <h1 className='text-2xl text-center my-4'>Drawing</h1>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt numquam hic asperiores nulla expedita, et tempora est officia, commodi eaque, nisi amet dolorem iusto minima? Ipsum odio voluptate asperiores?</p>
                </div>
            </div>
            
        </div>
    );
};

export default Hobby;