import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const renderAvatar = () => {
        if (user) {
            return (
                <div className="avatar">
                    <div className="w-12 md:ml-40 ml-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} title={user.displayName} alt={user.displayName} />
                    </div>
                </div>
            );
        }

    }

    const navOption = <>

        <Link to="/"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Home</a></li></Link>

        <Link to="/dailyBlog"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Daily Blog</a></li></Link>


        <Link to="/novel"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Novel & Movie Review</a></li></Link>

        <Link to="/aboutMe"><li><a className='md:hover:text-white md:text-neutral-content text-black'>About Me</a></li></Link>

        <Link to="/contact"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Contact Us</a></li></Link>


        {
            user ?
                <> 
                
                <Link to="/dashboard/myCart"><li><a className='md:hover:text-white md:text-neutral-content text-black'>Dashboard</a></li></Link>

                <button
                    style={{
                        background:
                            'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                        color: '#fff',
                        border: 'none', 
                        padding: '10px 20px', 
                        borderRadius: '5px',
                        cursor: 'pointer', 
                    }}
                    onClick={handleLogOut} className='btn btn-sm'> <FaSignOutAlt></FaSignOutAlt> Log out </button> </>
                :
                <>
                    <Link to="/login"><li><a className='md:hover:text-white md:text-neutral-content text-black'> <FaSignInAlt></FaSignInAlt> Login</a></li></Link> </>
        }
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


                <div className="navbar-end md:mr-10">
                    {user && (
                        <div >
                            {renderAvatar()}
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
};

export default Navbar;