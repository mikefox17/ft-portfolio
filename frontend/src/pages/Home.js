import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import About from '../components/About';
import Strategy from '../components/Strategy';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Projects />
            <Strategy />
            <Blog />
        </>
    );
};

export default Home;
