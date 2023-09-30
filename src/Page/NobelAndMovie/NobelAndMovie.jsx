import React, { useEffect, useState } from 'react';
import NovelReview from './NovelReview';
import Pagination from '../Pagination/Pagination';
import Date from '../Date/Date';
import { Helmet } from 'react-helmet-async';

const NobelAndMovie = () => {
    // Define novels as a state variable using useState
    const [novels, setNovels] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        // Fetch data from 'novel.json' and update the 'novels' state
        fetch('http://localhost:5000/novel')
            .then((res) => res.json())
            .then((data) => setNovels(data))
        // .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = novels.slice(firstPostIndex, lastPageIndex);

    return (
        <div> <br />

            <Helmet>
                <title> Poetry Of Introversion | Novel </title>
            </Helmet>

            <Date></Date>

            <div className="divider my-20 mx-10 md:text-2xl">Review Novels and Movies</div>

            <div className='grid md:grid-cols-3 gap-10 justify-center items-center md:mx-10 mx-4 my-10'>
                {currentPosts.map((novel) => (
                    <NovelReview key={novel._id} novel={novel} />
                ))}
            </div>

            <Pagination
                totalPosts={novels.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}

            ></Pagination>
        </div>
    );
};

export default NobelAndMovie;
