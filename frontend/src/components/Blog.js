import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

const Blog = () => {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]|order(publishedAt desc) [0..2]{
            title,
            slug,
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
        <div className='px-20 py-10 bg-indigo-600'>
            <h1 className='mb-10 text-center text-white text-4xl font-extrabold'>
                Recent Blog Posts
            </h1>

            <div className='lg:grid grid-cols-3 gap-20 '>
                {postData &&
                    postData.map((post, index) => (
                        <div className='rounded-xl overflow-hidden shadow-xl bg-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... sm:mb-10'>
                            <img
                                src={post.mainImage.asset.url}
                                alt=''
                                className='w-full rounded-t-lg h-80 object-cover'
                            />
                            <div className='px-3 font-bold text-xl mb-2'>
                                <h3 className='mt-3 text-2xl text-white'>
                                    {post.title}
                                </h3>
                            </div>
                            <ul className='px-3 py-5'>
                                <li className='text-indigo-200'>
                                    <strong className='text-indigo-900'>
                                        Author:{' '}
                                    </strong>
                                    {post.name}
                                </li>
                                <li className='text-indigo-200'>
                                    <strong className='text-indigo-900'>
                                        Tags:{' '}
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Blog;
