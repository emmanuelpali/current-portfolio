import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import NewAbout from "../NewAbout";
import AnimatedLetters from "../AnimatedLetter";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = " Pali".split("");
  const JobArray = "A Software Developer".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container-css  home-page">
        <NewAbout />
        <div className="text-zone">
          <h1>
            Hello! <br /> I'm<span className="e">Emmanuel</span>
            <AnimatedLetters
              letterClass={letterClass}
              arr={nameArray}
              idx={nameArray.length + 10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              arr={JobArray}
              idx={nameArray.length + 4}
            />
          </h1>
          <h2>
            I am a fullstack developer with Javascript and C# skills
          </h2>
          <Link to="/portfolio" className="flat-button">
            My Projects
          </Link>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Home;
