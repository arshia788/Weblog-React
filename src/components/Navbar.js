import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-center
         items-center py-4 px-10 bg-gray-800 text-white'>
            <div className='flex justify-between items-center w-1/2 '>

                <h1 className='text-3xl font-semibold '>Weblog</h1>

                <ul className='flex items-center gap-x-3 text-lg'>
                    <li>home</li>
                    <li>search</li>
                    <li>log-in</li>
                    <li>sign-up</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;