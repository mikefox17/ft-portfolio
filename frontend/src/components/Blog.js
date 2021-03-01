import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

const Blog = () => {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
            title,
            slug,
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
        <div>
            {postData && postData.map((post, index) => <h1>{post.title}</h1>)}
        </div>
    );
};

export default Blog;
