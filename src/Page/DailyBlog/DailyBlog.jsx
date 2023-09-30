import React, { useEffect, useState } from 'react';
import DailyUseBlog from './DailyUseBlog';
import Pagination from '../Pagination/Pagination';
import Date from '../Date/Date';
import { Helmet } from 'react-helmet-async';


const DailyBlog = () => {

    const [dailyBlogs, setDailyBlogs] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('http://localhost:5000/dailyBlog')
            .then(res => res.json())
            .then(data => setDailyBlogs(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = dailyBlogs.slice(firstPostIndex, lastPageIndex);

    return (
        <div> <br />

            <Helmet>
                <title> Poetry Of Introversion | Daily Blog </title>
            </Helmet>

            <Date></Date>
            <div className="divider my-20 mx-10 md:text-2xl">My Daily Routine</div>
            <div className='grid md:grid-cols-3 gap-10 md:mx-10 mx-5 my-10'>
                {
                    currentPosts.map(dailyBlog => <DailyUseBlog key={dailyBlog._id} dailyBlog={dailyBlog} ></DailyUseBlog>)
                }
            </div>

            <Pagination
                totalPosts={dailyBlogs.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}

            ></Pagination>
        </div>
    );
};

export default DailyBlog;