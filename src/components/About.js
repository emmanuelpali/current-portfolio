import React from 'react'
import Pali from '../images/pali.png';
import '../styles/about.css';

const About = () => {
    return (
        <div className='about-wrapper'>
            <div className="about-image-display-relative">
                <img className='aboutImage' src={Pali} alt="Emmanuel smiling"/>
            </div>
            <div className="about-content-display-absolute">
                <p className="about-content-p">I am a web developer based in Vancouver. Currently looking for an opportunity to apply my skills and knowledge in building creative technologies. Away from my computer I enjoy writing, running and the mountains.</p>
            </div>
            <div>
                <p  className="arrow-down">&#8595;</p>
            </div>
        </div>
    )
}

export default About
