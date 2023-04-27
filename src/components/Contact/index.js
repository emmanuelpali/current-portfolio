import "./index.scss";

import emailjs from "@emailjs/browser";
import React, { useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import pdf from "../../images/emmanuel-pali-portfolio-resume.pdf";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArray = "Contact Me".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const formRef = useRef();


  return (
    <>
      <div className="container-css contact-page">
        <div className="social">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/emmanuelpaliwebdeveloper/"
              >
                <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4de" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/emmanuelpali"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4de" />
              </a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500.000000 500.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              className="svg-container"
              transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
              fill="none"
            >
              <path
                id="drawLogo"
                d="M2290 4229 c-314 -38 -607 -145 -847 -306 -400 -268 -654 -643 -754
                -1113 -20 -90 -23 -135 -23 -310 0 -234 14 -321 85 -535 244 -734 1001 -1235
                1814 -1202 696 29 1297 407 1593 1002 66 132 106 250 139 404 25 113 27 146
                27 331 0 185 -2 218 -27 331 -33 154 -73 272 -139 404 -256 516 -744 872
                -1338 976 -132 24 -412 33 -530 18z m356 -200 c424 -42 768 -207 1055 -506
                296 -309 441 -716 408 -1141 -60 -751 -707 -1360 -1495 -1409 l-104 -6 0 64
                c0 76 27 479 32 483 1 2 26 8 53 15 197 48 400 243 472 455 38 112 40 255 4
                334 -29 65 -96 125 -163 148 -74 24 -195 16 -271 -19 -74 -34 -170 -125 -203
                -194 -38 -78 -44 -176 -14 -237 12 -25 35 -55 51 -67 l29 -21 -2 -166 -3 -167
                -86 1 c-74 1 -95 5 -151 31 -159 74 -243 206 -255 398 -7 110 20 230 70 313
                49 82 137 165 226 211 75 39 204 81 248 81 19 0 23 5 23 31 l0 31 -57 -8
                c-103 -16 -177 -9 -237 20 -104 51 -157 139 -164 273 -6 104 16 176 71 239 62
                71 105 88 212 88 78 0 107 -6 219 -43 71 -23 161 -46 200 -52 128 -17 271 17
                363 87 27 21 31 28 23 44 -10 18 -12 18 -48 3 -53 -23 -143 -18 -242 12 -225
                68 -270 77 -370 72 -52 -3 -122 -13 -155 -22 -184 -50 -372 -202 -425 -343
                -29 -77 -28 -200 4 -267 36 -78 116 -142 221 -175 62 -19 62 -22 6 -46 -250
                -111 -407 -341 -388 -569 19 -214 157 -388 369 -463 57 -20 100 -26 198 -31
                l125 -6 0 -265 0 -265 -45 -3 c-125 -10 -396 44 -576 115 -521 205 -897 660
                -979 1188 -23 144 -16 408 14 536 67 293 198 527 415 745 272 271 612 431
                1007 473 122 12 192 12 315 0z m122 -1651 c64 -16 151 -102 175 -173 40 -116
                31 -221 -30 -337 -64 -123 -222 -246 -338 -265 l-37 -6 6 54 c3 30 8 102 12
                161 l6 108 41 11 c50 13 103 60 118 106 17 54 -5 69 -51 33 -14 -11 -41 -20
                -62 -20 -37 0 -38 1 -37 38 1 90 18 255 27 264 12 12 81 37 105 38 10 0 39 -5
                65 -12z"
                stroke="#ffd700"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              arr={textArray}
              idx={15}
            />
          </h1>
          <a className="btn flat-button" href={pdf} target="_blank" download>Download my Resume</a>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Contact;
