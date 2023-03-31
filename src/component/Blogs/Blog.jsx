import React from 'react';
import './Blog.css'

const Blog = ({blog}) => {
    return (
        <div>

            <div className="poster-image">
            <img src={blog.posterImage} alt="" />
            </div>

            <div className="info">
                <div className="author">
                    <div className='authorImage'>
                        <img src={blog.authorImage} alt="" />
                    </div>
                    <div>
                        <h4>{blog.authorName}</h4>
                        <p>{blog.postTime}</p>
                    </div>
                </div>
                <p>{blog.readTime}</p>
            </div>
            
            <h2>{blog.title}</h2>
        </div>
    );
};

export default Blog;