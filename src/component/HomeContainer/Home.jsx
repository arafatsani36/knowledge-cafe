import React, { useEffect, useState } from 'react';
import Blog from '../Blogs/Blog';

import './Home.css'
import Bookmarked from '../BookmarkedContainer/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    
    const [blogs , setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

     const [bookmarked , setBookmarked] = useState([])
     const [reads , setReads] = useState([])

    const handleBookmark = (bookmarks) => {

      const books =  bookmarked.find(book => book.id == bookmarks.id);
        if(books){
            toast.error('already added')
        }


        let newBook = [...bookmarked, bookmarks];
         setBookmarked(newBook);



    }

    const readMore = (read) => {
        let newRead = [...reads, read];
        setReads(newRead);
    }



    return (
        <div className='home-container'>
            <div className="blog-container">
               {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} readMore={readMore}></Blog>)
               }
            </div>
            <div className="sidebar-container">      
            {
                <Bookmarked bookmarked={bookmarked} reads={reads}></Bookmarked>
            }        
            </div>
            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Home;