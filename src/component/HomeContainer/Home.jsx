import React, { useEffect, useState } from 'react';
import Blog from '../Blogs/Blog';

import './Home.css'
import Bookmarked from '../BookmarkedContainer/Bookmarked';

const Home = () => {
    
    const [blogs , setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

     const [bookmarked , setBookmarked] = useState([])
    const handleBookmark = (bookmarks) => {

        let newBook = [...bookmarked, bookmarks];
       
         setBookmarked(newBook);

    }



    return (
        <div className='home-container'>
            <div className="blog-container">
               {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
               }
            </div>
            <div className="sidebar-container">      
            {
                <Bookmarked bookmarked={bookmarked}></Bookmarked>
            }        
            </div>
            
        </div>
    );
};

export default Home;