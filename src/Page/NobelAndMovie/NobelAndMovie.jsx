import React, { useEffect, useState } from 'react';
import NovelReview from './NovelReview';
import Pagination from '../Pagination/Pagination';

const NobelAndMovie = () => {
    // Define novels as a state variable using useState
    const [novels, setNovels] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    useEffect(() => {
        // Fetch data from 'novel.json' and update the 'novels' state
        fetch('novel.json')
            .then((res) => res.json())
            .then((data) => setNovels(data))
            // .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = novels.slice(firstPostIndex, lastPageIndex);

    return (
        <div>
            <div>
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