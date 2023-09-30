import React, { useEffect, useState } from 'react';
import { FaEye, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bgVideoLogIn from '../../assets/production_id_5125003 (2160p).mp4'
import './LogIn.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

    // show password
    const [showPassword, setShowPassword] = useState(false);

    const passwordShow = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className="login">

                <div className="divider my-20 mx-10 md:text-2xl   text-white"><span className='bg-black p-4 bg-opacity-40 rounded-2xl'>Log In</span></div>

                <video autoPlay loop muted className="video-background-login">
                    <source src={bgVideoLogIn} type="video/mp4" />
                </video>


                <div className="login-content">

                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">

                        <form>

                            <div className="md:max-w-md md:w-[1000px] bg-black p-10 bg-opacity-50 text-black  mx-auto">


                                {/* email */}
                                <label className="block  font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                    Email
                                </label>

                                <div className="mb-4">

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                {/* password */}

                                <label className="block  font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                    PassWord
                                </label>

                                <div className="mb-4">
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            className="input input-bordered mt-1 block w-full pr-12 text-black"
                                            placeholder="Enter your password"
                                            required
                                        />

                                        <div
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={passwordShow}
                                        >

                                            {showPassword ? (
                                                <FaEye></FaEye>
                                            ) : (
                                                <FaRegEye className='text-blue-400'></FaRegEye>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                <div className="mt-6">

                                    <input
                                        className='w-full'
                                        style={{
                                            background:
                                                'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                                            color: '#fff', // Text color
                                            border: 'none', // Remove the border
                                            padding: '10px 20px', // Adjust padding for better appearance
                                            borderRadius: '5px', // Add border radius for rounded corners
                                            cursor: 'pointer', // Change cursor on hover
                                        }}

                                        type="submit" value="Log In" />


                                </div>



                            </div>



                        </form>

                        <h1 className='text-center mt-10 md:text-xl pb-5 font-bold text-white'>Are You New Here? First <Link className='text-blue-500' to='/signup'>Sign Up</Link> Please </h1>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;