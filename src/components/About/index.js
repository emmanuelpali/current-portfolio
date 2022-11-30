import React from "react";
import Pali from "../../images/pali.png";
import { Link } from "react-router-dom";
import "./index.scss";
import Loader from "react-loaders";

const About = () => {
  return (
    <>
      <div className="about-container container-css">
        <h1>About</h1>
        <img src={Pali} alt="logo" className="solid-logo" />
        <p>
          Hi, I'm Emmanuel. I am a Software Developer with experience building
          and maintaining React and Nodejs applications.
        </p>
        <div className="">
          <Link to="/" className="flat-button">
            Return Home
          </Link>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default About;
