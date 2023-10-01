import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 bg-blue-800 mt-60  text-white font-bold animate-pulse">

                        {/* Sidebar content here */}
                        <Link to="/dashboard/myCart"><li><a className='hover:text-white'>Add Daily Blog</a></li></Link>

                        <Link to="/dashboard/manageBlog"><li><a className='hover:text-white'>Manage Daily Blog</a></li></Link>

                        <Link to="/dashboard/addNovel"><li><a className='hover:text-white'>Add Novel and Movie Review</a></li></Link>

                        <Link to="/dashboard/manageNovel"><li><a className='hover:text-white'>Manage Novel</a></li></Link>
                    </ul>

                    <Link to="/"><button className='btn btn-warning mt-3 ml-3'>Back To Home</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;