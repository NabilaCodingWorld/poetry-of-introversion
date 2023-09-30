import React, { useEffect, useState } from 'react';
import bgVideoSignUp from '../../assets/production_id_4524595 (1080p).mp4'
import './SignUp.css'
import { FaEye, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {

    // show password
    const [showPassword, setShowPassword] = useState(false);

    const passwordShow = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className="signUp">

                <div className="divider my-20 mx-10 md:text-2xl text-white"> <span className='bg-black p-4 bg-opacity-40 rounded-2xl'>Sign Up</span> </div>

                <video autoPlay loop muted className="video-background-signUp">
                    <source src={bgVideoSignUp} type="video/mp4" />
                </video>


                <div className="signUp-content">

                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">

                        <form>

                            <div className="md:max-w-md md:w-[1000px] bg-black p-10 bg-opacity-50 text-black  mx-auto">

                                {/* Name */}

                                <div className="mb-4">

                                    <label className="block  font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        type="name"
                                        {...register("name", { required: true })}
                                        name="name"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your name"

                                    />
                                    {errors.name && <span className='text-red-500'>Name field is required</span>}
                                </div>

                                {/* Email */}

                                <div className="mb-4">

                                    <label className="block  font-bold mb-2 text-white text-xl" htmlFor="to_name"> Email

                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", { required: true })}
                                        name="email"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your email"

                                    />
                                    {errors.email && <span className='text-red-500'>Email field is required</span>}
                                </div>

                                {/* password */}

                                <div className="mb-4 text-black relative">

                                    <label className="block  font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                        Password
                                    </label>

                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                                        })}
                                        name="password"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your password"
                                    />
                                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should be at least 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-500'>Password should contain at least one capital letter and one special character</p>}

                                    <div
                                        className="absolute inset-y-0 mt-10 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={passwordShow}
                                    >
                                        {showPassword ? (
                                            <FaEye className='text-blue-400'></FaEye>
                                        ) : (
                                            <FaRegEye className='text-blue-400'></FaRegEye>
                                        )}
                                    </div>
                                </div>



                                {/* Photo URL */}
                                <div className="mb-4">

                                    <label className="block  font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                        Photo Url
                                    </label>

                                    <input
                                        id="text"
                                        type="photoURL"
                                        {...register("photoURL", { required: true })}
                                        name="photoURL"
                                        className="input input-bordered mt-1 block w-full"
                                        placeholder="Enter your Photo Url"

                                    />
                                    {errors.photoURL?.type === 'required' && <p className='text-red-500'>Photo-Url is required</p>}
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
                                        type="submit" value="Sign Up" />

                                </div>

                            </div>



                        </form>

                        <h1 className='text-center mt-10 md:text-xl text-sm pb-5 font-bold text-white'>If you have account already? So <Link className='text-blue-500' to='/login'>Log In</Link> Please </h1>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;