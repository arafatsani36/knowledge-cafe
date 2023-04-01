import React from 'react';
import './Bookmarked.css'

const Bookmarked = ({bookmarked }) => {
   const book =  bookmarked.map(b => <p>{b.title}</p> )

    return (
        <div>
             <h4>add : {bookmarked.length}</h4>
               <p className='bookmark'>{book}</p>
        </div>
    );
};

export default Bookmarked;