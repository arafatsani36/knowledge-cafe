
import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'

const Blog = ({blog , handleBookmark , readMore}) => {
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

                <div className='read'>
                <p>{blog.readTime} min Read</p>
                <i><FontAwesomeIcon onClick={() => handleBookmark(blog)} className='bookmark' icon={faBookmark} /></i>
                </div>
                
            </div>

            <div className="hastag">
                <div className='fasthastag'>
                    <p>#beginners</p>
                </div>
                <p>#programming</p>
            </div>
            
            <button onClick={() => readMore(blog)}>Mark as read</button>
            <h2 className='blog-title'>{blog.title}</h2>

        </div>
  
    );
};




export default Blog;