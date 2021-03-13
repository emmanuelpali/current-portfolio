import React from 'react';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';
import '../styles/home.css';

const Home = () => {
    return (
        <div className= "main">
           <Intro />
           <About />
           <Portfolio />
           <Footer /> 
        </div>
    )
}

export default Home
