import React, { useEffect, useState } from 'react';
import DailyUseBlog from './DailyUseBlog';
import Pagination from '../Pagination/Pagination';


const DailyBlog = () => {

    const [dailyBlogs, setDailyBlogs] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('dailyBlog.json')
            .then(res => res.json())
            .then(data => setDailyBlogs(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = dailyBlogs.slice(firstPostIndex, lastPageIndex);

    return (
        <div>
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