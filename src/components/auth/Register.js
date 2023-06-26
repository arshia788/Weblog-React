import React from 'react';


import pic from '../../assets/images/register.svg';
import './auth.css';


const Register = () => {
    return (
        <div className='register bg-no-repeat'
        style={{backgroundImage:`url(${pic})`
        }}
        >

            <div className='bg-gray-800 xs:w-9/12 xs:absolute xs:right-12 xs:top-full xs:-mt-40
             md:right-32 md:top-48 md:w-3/12 md:-m-0
             py-3 px-2 rounded-md 
            '>
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
                        <label className='mr-3 text-white mb-2'>email:</label>
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

export default Register;