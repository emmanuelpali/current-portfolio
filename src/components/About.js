import React from "react";
import Pali from "../images/pali.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-image-display-relative">
        <img className="aboutImage" src={Pali} alt="Emmanuel smiling" />
      </div>
      <div className="about-content-display-absolute">
        <p className="about-content-p">
          I am an application's developer who is experienced in JavaScript, React,
          Nodejs/Express, Wordpress, CSS/SASS and HTML.
        </p>
      </div>
      <div>
        <p className="arrow-down">&#8595;</p>
      </div>
    </div>
  );
};

export default About;
