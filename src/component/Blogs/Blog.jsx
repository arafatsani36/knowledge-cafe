
import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'

const Blog = ({blog , handleBookmark}) => {
    return (
        <div className='blog-container'>

            <div className="poster-image">
            <img src={blog.posterImage} alt="" />
            </div>

            <div className="info">
                <div className="author">
                    <div className='authorImage'>
                        <img src={blog.authorImage} alt="" />
                    </div>
                    <div className='authorinfo'>
                        <h4 className='authorname'>{blog.authorName}</h4>
                        <p className='postime'>{blog.postTime}</p>
                    </div>
                </div>
                <p>{blog.readTime} <FontAwesomeIcon onClick={() => handleBookmark(blog)} className='bookmark' icon={faBookmark} /></p>
            </div>

            <div className="hastag">
                <div className='fasthastag'>
                    <p>#beginners</p>
                </div>
                <p>#programming</p>
            </div>
            <a href="#">Mark as read</a>
            <h2 className='blog-title'>{blog.title}</h2>
        </div>
    );
};

export default Blog;