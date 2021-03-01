import React from 'react';
import image from '../iconfinder_fox_animal_wild_nature_wildlife_cute_tail_5296656.png';

const NavBar = () => {
    return (
        <div className='bg-indigo-600 flex justify-center items-center p-4'>
            {/* left side */}
            <div className='flex items-center'>
                <img src={image} alt='' className='mr-2' />
                <a
                    href=''
                    className='inline-block p-3 text-indigo-300 text-2xl font-bold hover:bg-indigo-300 hover:text-indigo-500 rounded transition ease-in duration-400'
                >
                    Projects
                </a>
                <a
                    href=''
                    className='inline-block p-3 text-indigo-300 text-2xl font-bold hover:bg-indigo-300 hover:text-indigo-500 rounded transition ease-in duration-400'
                >
                    Blog
                </a>
            </div>
            {/* right side */}
            <div className='flex items-center'>
                <a
                    href=''
                    className='inline-block p-3 text-indigo-300 text-2xl font-bold hover:bg-indigo-300 hover:text-indigo-500 rounded transition ease-in duration-400'
                >
                    Services
                </a>
                <a
                    href=''
                    className='inline-block p-3 text-indigo-300 text-2xl font-bold hover:bg-indigo-300 hover:text-indigo-500 rounded transition ease-in duration-400'
                >
                    Contact
                </a>
            </div>
        </div>
    );
};

export default NavBar;
