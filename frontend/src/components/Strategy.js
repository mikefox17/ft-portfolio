import React from 'react';
import svg from '../undraw_Goals_re_lu76.svg';

const Strategy = () => {
    return (
        <section className='bg-indigo-600 py-20'>
            <div className='container  mx-auto p-4 sm:p-6 lg:p-8 '>
                <div className='flex flex-wrap -mx-8'>
                    <div className='w-full lg:w-1/2 px-8'>
                        <div className='mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0 sm:text-center'>
                            <h2 className='mb-4 text-3xl  lg:text-4xl font-bold font-heading text-white '>
                                Plan, Strategy, & Colaborate
                            </h2>
                            <p className='mb-8 leading-loose text-indigo-200 text-xl sm:text-center'>
                                We build a development enviroment that is easily
                                accesible to our clients. We set tools in place
                                that makes colloaboration between us and the
                                client smooth and effecient.
                            </p>
                            <div className='w-full md:w-1/3'></div>
                        </div>
                        <img src={svg} alt='' />
                    </div>
                    <div className='w-full lg:w-1/2 px-8'>
                        <ul className='space-y-12'>
                            <li className='flex -mx-4'>
                                <div className='px-4'>
                                    <span className='flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-indigo-500 text-white'>
                                        1
                                    </span>
                                </div>
                                <div className='px-4'>
                                    <h3 className='my-4  font-semibold text-white text-4xl'>
                                        Ticket Management
                                    </h3>
                                    <p className='text-indigo-200 text-base text-xl'>
                                        We handle ticket issues with Notion, an
                                        easy to use tool to streamline issues
                                        that need to be resolved.
                                    </p>
                                </div>
                            </li>
                            <li className='flex -mx-4'>
                                <div className='px-4'>
                                    <span className='flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-indigo-500 text-white'>
                                        2
                                    </span>
                                </div>
                                <div className='px-4'>
                                    <h3 className='my-4 text-4xl font-semibold text-white'>
                                        Google Drive
                                    </h3>
                                    <p className='text-indigo-200 text-base text-xl'>
                                        All assets are saved in one central
                                        folder. This allows easy access for team
                                        members to graphics, images, copywrite,
                                        etc.
                                    </p>
                                </div>
                            </li>
                            <li className='flex -mx-4'>
                                <div className='px-4'>
                                    <span className='flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-indigo-500 text-white'>
                                        3
                                    </span>
                                </div>
                                <div className='px-4'>
                                    <h3 className='my-4 text-4xl font-semibold text-white'>
                                        Slack Communication
                                    </h3>
                                    <p className='text-indigo-200  text-base text-xl'>
                                        We communicate with with Slack. We setup
                                        channels for each aspect of the project
                                        for easy communication.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strategy;
