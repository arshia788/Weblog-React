import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-center
         items-center py-4 px-10 bg-gray-800 text-white'>
            <div className='flex justify-between items-center w-1/2 '>

                <Link to='/'>
                    <h1 className='text-3xl font-semibold '>Weblog</h1>
                </Link>

                <ul className='flex items-center gap-x-3 text-lg'>
                    <li>home</li>
                    <li>search</li>
                    <Link to='/login'>
                        <li>log-in</li>
                    </Link>
                    
                    <Link to='/signup'>
                        <li>sign-up</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;