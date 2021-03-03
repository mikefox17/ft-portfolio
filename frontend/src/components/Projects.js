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

    return <></>;
};

export default Projects;
