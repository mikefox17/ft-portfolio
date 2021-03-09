import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]|order(publishedAt desc) [0..2]{
            title,
            slug,
            excerpt,
            tags,
            'name': author->name,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`
            )
            .then(data => setPost(data))
            .catch(console.error);
    }, []);

    return (
        <div class='w-full bg-white p-12 pb-40 bg-indigo-500'>
            <div class='header mb-12 text-center'>
                <div class='title text-center'>
                    <h3 className='my-4  font-semibold text-white text-4xl'>
                        Our Recent Stories
                    </h3>
                    <p class='text-base text-xl font-light text-indigo-200 text-center'>
                        Articles about all things wed dev and tech
                    </p>
                </div>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
                {postData &&
                    postData.map((post, index) => (
                        <div class='overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto'>
                            <Link
                                to={'/post/' + post.slug.current}
                                key={post.slug.current}
                            >
                                <img
                                    alt='blog photo'
                                    src={post.mainImage.asset.url}
                                    class='max-h-40 w-full object-cover'
                                />
                                <div class='bg-white dark:bg-gray-800 w-full p-4'>
                                    <p class='text-indigo-500 text-md font-medium'>
                                        Article
                                    </p>
                                    <p class='text-gray-800 dark:text-white text-xl font-medium mb-2'>
                                        {post.title}
                                    </p>

                                    <p class='text-gray-400 dark:text-gray-300 font-light text-md'>
                                        {post.excerpt}
                                    </p>
                                    <div class='flex flex-wrap justify-starts items-center mt-4'>
                                        {post.tags.map(tag => (
                                            <div class='text-xs mr-2 py-1.5 px-4 m-1 text-gray-600 bg-blue-100 rounded-2xl'>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Blog;
