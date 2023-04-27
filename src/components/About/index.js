import React from "react";
import Pali from "../../images/pali.png";
import { Link } from "react-router-dom";
import "./index.scss";
import Loader from "react-loaders";
import NavFix from "../NavFix/NavFix";

const About = () => {
  return (
    <>
      <div className="about-container container-css">
        <h1>About</h1>
        <img src={Pali} alt="logo" className="solid-logo" />
        <p>
        I am a full stack developer with a strong background in building and maintaining React applications. I have a keen eye for aesthetics and enjoy creating visually appealing user interfaces. Recently, I have gained proficiency in C#, and I am excited about leveraging this knowledge to develop software that solves real-world problems and delivers exceptional user experiences.
.
        </p>
        <div className="">
          <Link to="/" className="flat-button">
            Return Home
          </Link>
        </div>
        <NavFix />
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default About;
