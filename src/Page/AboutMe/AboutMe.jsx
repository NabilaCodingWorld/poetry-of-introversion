import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaTwitter, FaPortrait, FaMailBulk, FaInstagram } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import KnowledgeIcon from './KnowledgeIcon';

const AboutMe = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-woman-holding-coffee-cup_23-2148503418.jpg?w=740&t=st=1695923100~exp=1695923700~hmac=4d02426e1bf63acf148e632da62a8e21cba28334c14ceb835967ef951998a6d9)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Hello there, <br />My Name is Raha Musfiq Nabila. I am a proud introvert. I love drawing, photography, fishing.</h1>
                        <p className="mb-5"></p>

                    </div>
                </div>
            </div>



            <div className="divider my-20 md:mx-10 md:text-2xl">Some Information About Myself</div>

            <div className='grid md:grid-cols-2 justify-center items-center mx-10 my-10'>
                <img className='md:w-[50%] w-[100%] mb-5' src="https://i.ibb.co/c2wJHKD/nabila-50ca7da1.png" alt="" />

                <div className='text-xl'>
                    <p className='mb-2'> <b>Name: </b> Raha Musfiq Nabila </p>
                    <p className='mb-2'> <b>Date of Birth: </b> 17 May, 1997 </p>
                    <p className='mb-2'> <b>Home Town: </b> Shathibari, Mithapukur, Rangpur </p>
                    <p className='mb-2'> <b>Hobby: </b> Reading Books, Gardening, Fishing, Drawing </p>
                    <p className='mb-2'> <b>Favourite Color: </b> White</p>
                    <p className='mb-2'> <b>Favourite Food: </b>Lau Chingri</p>
                    <p className='mb-2'> <b>Favourite Drink: </b>Tea</p>
                    <p className='mb-2'> <b>Favourite Place: </b>Forest</p>
                    <p className='mb-2'> <b>Favourite Personality: </b>Introvert</p>
                    <p className='mb-2'> <b>Favourite Hero: </b>Soumitro Chattapadday</p>
                    <p className='mb-2'> <b>Favourite Writter: </b>Somores Mojumder</p>
                    <p className='mb-2'> <b>Favourite Movie: </b>Opur Songsar</p>
                    <p className='mb-2'> <b>Favourite Song: </b>Tujshe Naraz Nehi Jindegi</p>
                    <p className='mb-2'> <b>Favourite Person: </b>Ma</p>
                    <p className='mb-2'> <b>Hate Most: </b>Toxic Relatives and Friends</p>
                </div>

            </div>

            <div className="divider my-20 md:mx-10 md:text-2xl">Accademic Qualification</div>

            <div>
                <div className="overflow-x-auto md:mx-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Acadamy</th>
                                <th>Year</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>SSC</th>
                                <td>Shathibari High School</td>
                                <td>Science, 2013</td>
                                <td>GPA-5</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>HSC</th>
                                <td>Shathibari College</td>
                                <td>Science, 2015</td>
                                <td>4.33</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>B.SC</th>
                                <td>BAUST</td>
                                <td>CSE, 2021</td>
                                <td>3.28</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="divider my-20 md:mx-10 md:text-2xl">My Academic Knowledge</div>

            <KnowledgeIcon></KnowledgeIcon>



            <div className="divider my-20 md:mx-10 md:text-2xl">My Contacts</div>

            <Marquee>
                <div className='flex gap-10 my-10 ml-10'>
                    <FaFacebook className='w-10 h-10' style={{ color: '#1877f2' }}></FaFacebook>
                    <FaLinkedin className='w-10 h-10' style={{ color: '#0077b5' }}></FaLinkedin>
                    <FaGithub className='w-10 h-10' style={{ color: '#333' }}></FaGithub>
                    <FaWhatsapp className='w-10 h-10' style={{ color: '#25D366' }}></FaWhatsapp>
                    <FaTelegram className='w-10 h-10' style={{ color: '#0088cc' }}></FaTelegram>
                    <FaTwitter className='w-10 h-10' style={{ color: '#1da1f2' }}></FaTwitter>
                    <FaPortrait className='w-10 h-10' style={{ color: '#000' }}></FaPortrait>
                    <FaMailBulk className='w-10 h-10' style={{ color: '#ff4500' }}></FaMailBulk>
                    <FaInstagram className='w-10 h-10' style={{ color: '#bc2a8d' }}></FaInstagram>

                </div>
            </Marquee>

        </div>
    );
};

export default AboutMe;