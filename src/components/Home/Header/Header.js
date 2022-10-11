import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='d-flex'>
            <h1>ProCode</h1>
            <div className='me-auto mb-2'>
                <Link className='text-decoration-none ' to='/'>Home</Link>
                <Link className='text-decoration-none' to='statistics'>Statistics</Link>
                <Link className='text-decoration-none' to='blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;