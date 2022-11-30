import React from "react";
import Pali from "../../images/pali.png";
import AnimatedLetters from "../AnimatedLetter";
import "./index.scss";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";

const About = () => {
  return (
    <div className="logo-container">
      <img src={Pali} alt="logo" className="solid-logo" />
    </div>
  );
};

export default About;
