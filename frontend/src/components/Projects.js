import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

const Projects = () => {
    const [projectData, setProject] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]|order(publishedAt desc) [0..3]{
            title,
            slug,
            tags,
            link,
            image{
              asset->{
                _id,
                url
              },
              alt
            }
          }`
            )
            .then(data => setProject(data))
            .catch(console.error);
    }, []);

    return (
        <div class='w-full bg-white p-12 pb-40 bg-indigo-600'>
            <div class='header mb-12 text-center'>
                <div class='title text-center'>
                    <h3 className='my-4  font-semibold text-white text-4xl'>
                        Our Recent Clients
                    </h3>
                </div>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12'>
                {projectData &&
                    projectData.map((project, index) => (
                        <div class='overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto'>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                class='w-full block h-full'
                            >
                                <img
                                    alt='blog photo'
                                    src={project.image.asset.url}
                                    class='max-h-40 w-full object-cover'
                                />
                                <div class='bg-white dark:bg-gray-800 w-full p-4'>
                                    <p class='text-indigo-500 text-md font-medium'>
                                        Article
                                    </p>
                                    <p class='text-gray-800 dark:text-white text-xl font-medium mb-2'>
                                        {project.title}
                                    </p>

                                    <div class='flex flex-wrap justify-starts items-center mt-4'>
                                        {project.tags.map(tag => (
                                            <div class='text-xs mr-2 py-1.5 px-4 m-1 text-gray-600 bg-blue-100 rounded-2xl'>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Projects;
