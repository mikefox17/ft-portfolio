import React from 'react';

const Hero = () => {
    return (
        <div className='md:flex items-center py-20 px-10 bg-indigo-500 justify-between'>
            {/* left */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className='text-5xl mb-4 text-white text-center'>
                We build intuitive WordPress experiences</h1>
                <p className='text-2xl text-indigo-200 mb-4 text-center'>
                    WordPress Development and Consultation
                </p>
                <div className='flex justify-center'>
                    <a
                        href='#'
                        className='inline-block py-3 px-6 text-lg bg-gray-300 text-gray-800 mr-2 rounded-lg hover:bg-gray-800 hover:text-gray-400 transition ease-in duration-400 shadow-2xl '
                    >
                        Learn More
                    </a>
                    <a
                        href='#'
                        className='inline-block py-3 px-6 text-lg bg-red-400 text-red-800 mr-2 rounded-lg hover:bg-red-800 hover:text-red-400 transition ease-in duration-400 shadow-2xl'
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            {/* right */}
            <div className='md:w-1/2'>
                <img
                    src='https://images.unsplash.com/photo-1546900703-cf06143d1239?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1591&q=80'
                    alt=''
                    className='w-full rounded-lg shadow-2xl'
                />
            </div>
        </div>
    );
};

export default Hero;
