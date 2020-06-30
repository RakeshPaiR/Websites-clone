import React from 'react';
import Hero from '../../components/Hero/Hero';
import NewFreeBanner from '../../components/NewFreeBanner/NewFreeBanner';
import Getstarted from '../../components/Getstarted/Getstarted';
import GHteam from '../../components/GHteam/GHteam';
import Navbar from '../../components/Navbar/Navbar';

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <NewFreeBanner />
            <Getstarted />
            <GHteam />
        </>
    );
}

export default Landing;
