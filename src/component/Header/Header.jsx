import React from 'react';
import './Header.css';
import logo from '../../images/profile.jpg'



const Header = () => {
    return (
        <div className='header'>
           <h2>Knowledge Cafe</h2>
           <div className="profile">
            <img src={logo} alt="" />
           </div>
        </div>
    );
};

export default Header;