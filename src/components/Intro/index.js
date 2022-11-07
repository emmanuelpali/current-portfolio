import React from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetter";
import { useState, useEffect } from "react";

const Intro = () => {
  const [letterClass, setLetterClass] = useState("");
  const nameArray = `Hi, I'm Emmanuel. A React developer with a working knowledge of full stack development. Checkout my projects below.`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass(nameArray.slice(0, letterClass.length + 1));
    }, 50);

    return () => clearTimeout(timeout);
  }, [letterClass]);
  return (
    <div className="intro-text">
      <h1 className="blinking">{letterClass} </h1>
    </div>
  );
};

export default Intro;
