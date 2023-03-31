import React, { useEffect, useState } from 'react';
import Blog from '../Blogs/Blog';

import './Home.css'

const Home = () => {
    
    const [blogs , setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])



    return (
        <div className='home-container'>
            <div className="blog-container">
               {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
               }
            </div>
            <div className="sidebar-container">
                    this is sidebar
            </div>
            
        </div>
    );
};

export default Home;