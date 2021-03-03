import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

const About = () => {
    const [aboutData, setAbout] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == 'author']{
            name,
            'bio':bio[0].children[0].text,
            'authorImage':image.asset.url
        }
        `
            )
            .then(data => setAbout(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            {aboutData &&
                aboutData.map((about, index) => <h1>{about.name}</h1>)}
        </div>
    );
};

export default About;
