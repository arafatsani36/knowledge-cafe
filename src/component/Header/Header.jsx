import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <h2>Knowledge Cafe</h2>
           <div className="profile">
            <img src="profile.jpg" alt="" />
           </div>
        </div>
    );
};

export default Header;