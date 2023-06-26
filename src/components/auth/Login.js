import React from 'react';

import pic from '../../assets/images/login.svg';
import './auth.css';


const Login = () => {
    return (
        <div className='login h-screen '
        style={{backgroundImage:`url(${pic})`
    }}
        >
            <div className='bg-gray-800 w-3/12 py-3 px-2 rounded-md m-2  '>

                <h3 className='text-center text-white text-xl mb-4
                border 
                '>sign-up!</h3>

                <form className=''>
                    <div className='flex flex-col mb-4'>
                        <label className='mr-3 text-white mb-2'>name:</label>
                        <input 
                        className='border-none outline-none rounded-sm py-0.5'
                        />
                    </div>

                    <div className='flex flex-col mb-4'>
                        <label className='mr-3 text-white mb-2'>password:</label>
                        <input 
                        className='border-none outline-none rounded-sm py-0.5'
                        />
                    </div>

                    <button
                    className='text-white bg-green-600 p-2 rounded-md
                    w-full
                    '
                    >sing-up</button>

                </form>

            </div>
        </div>
    );
};

export default Login;