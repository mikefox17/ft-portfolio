import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        tags,
        publishedAt,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
            )
            .then(data => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;

    return (
        <div className='max-w-screen-xl mx-auto'>
            <main className='mt-10'>
                <div
                    className='mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative'
                    style={{ height: '24em' }}
                >
                    <div
                        className='absolute left-0 bottom-0 w-full h-full z-10'
                        style={{
                            backgroundImage:
                                'linear-gradient(180deg,transparent,rgba(0,0,0,.7))',
                        }}
                    />
                    <img
                        src={singlePost.mainImage.asset.url}
                        className='absolute left-0 top-0 w-full h-full z-0 object-cover'
                    />
                    <div className='p-4 absolute bottom-0 left-0 z-20'>
                        <div class='flex flex-wrap justify-starts items-center mt-4'>
                            {singlePost.tags.map(tag => (
                                <div class='text-xs mr-2 py-1.5 px-4 m-1 text-gray-600 bg-blue-100 rounded-2xl'>
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>
                            {singlePost.title}
                        </h2>
                        <div className='flex mt-3'>
                            <img
                                src={urlFor(singlePost.authorImage).url()}
                                className='h-10 w-10 rounded-full mr-2 object-cover'
                            />
                            <div>
                                <p className='font-semibold text-gray-200 text-sm'>
                                    {' '}
                                    {singlePost.name}{' '}
                                </p>
                                <p className='font-semibold text-gray-400 text-xs'>
                                    {' '}
                                    {singlePost.publishedAt}{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed'>
                    <BlockContent
                        blocks={singlePost.body}
                        projectId='5yccswxv'
                        dataset='production'
                    />
                </div>
            </main>
        </div>
    );
}
