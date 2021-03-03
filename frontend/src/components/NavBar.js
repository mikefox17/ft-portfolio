import React from 'react';
import { TailwindNavbar } from 'tailwind-navbar-react';
import image from '../iconfinder_fox_animal_wild_nature_wildlife_cute_tail_5296656.png';

const NavBar = () => {
    return (
        <TailwindNavbar
            brand={<img src={image} width='40' height='40' alt='Brand logo' />}
            className=' bg-indigo-600 relative flex  items-center justify-center px-2 py-2 navbar-expand-lg  '
        >
            <nav>
                <ul className='pt-4 text-base font-bold text-lg lg:flex lg:pt-0'>
                    <li>
                        <a
                            className='block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400'
                            href='/'
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className='block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400'
                            href='/'
                        >
                            Our Work
                        </a>
                    </li>
                    <li>
                        <a
                            className='block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400'
                            href='/'
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            className='block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400'
                            href='/'
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </TailwindNavbar>
    );
};

export default NavBar;
