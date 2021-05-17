import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Vanta from './Vanta';
import About from './About';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
            <Vanta />
            <br/>
            <Projects />
            <br />
            <Skills />
            <br /><hr /><br />
            <About />
            <br /><br />
            <Footer />
        </>
    )
}

export default HomePage;
