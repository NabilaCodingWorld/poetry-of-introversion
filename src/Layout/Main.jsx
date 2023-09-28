import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Share/Navbar/Navbar';
import Footer from '../Page/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;