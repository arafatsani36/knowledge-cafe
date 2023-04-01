import React from 'react';
import './Bookmarked.css'
import { parse } from '@fortawesome/fontawesome-svg-core';

const Bookmarked = ({bookmarked, reads}) => {
   const book =  bookmarked.map(b => <p>{b.title}</p> )
   console.log(reads)

   let read = 0;
   for(const r of reads){
    read = read + r.readTime;
   }
   
   


    return (
        <div className='bookMarkContaner'>
            <h3 className='SpentTime'>Spent time on read : {read}</h3>

            <div className='bookMarks'>
            <h3 className='BookmarkedLength'>Bookmarked Blogs : {bookmarked.length}</h3>
            <p className='bookmark'>{book}</p>
          
            </div>
            
        </div>
    );
};

export default Bookmarked;