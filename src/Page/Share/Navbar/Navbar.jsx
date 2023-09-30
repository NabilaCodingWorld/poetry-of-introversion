import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOption = <>

        <Link to="/"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Home</a></li></Link>
        
        <Link to="/dailyBlog"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Daily Blog</a></li></Link>


        <Link to="/novel"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Novel and Movie Review</a></li></Link>

        <Link to="/aboutMe"><li><a className='md:hover:text-white md:text-neutral-content text-black'>About Me</a></li></Link>

        <Link to="/contact"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Contact Us</a></li></Link>

        <Link to="/login"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Login</a></li></Link>
    </>

    return (
        <div>
            <div className="navbar text-neutral-content font-bold  bg-[#00061A]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-sm md:text-xl">Poetry Of Introversion</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;