import React from "react";
import './index.scss';
import AnimatedLetters from '../AnimatedLetter'
import { useState, useEffect } from 'react'

const Intro = () => {
  const [letterClass, setLetterClass] = useState('')
  const nameArray = `Hi, I'm Emmanuel`

     useEffect(() => {
      const timeout = setTimeout(() => {
         setLetterClass(nameArray.slice(0, letterClass.length + 1)) 
      }, 100);

      return () => clearTimeout(timeout)
  }, [letterClass]) 
    return (
      <div className="intro-text">
       <h1 className="blinking">{letterClass} </h1>
      </div>
    );
}

export default Intro;
