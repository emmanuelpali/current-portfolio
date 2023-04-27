import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import portfolioContent from "../../DATA/data";
import Card from "../Card";
import NavFix from "../NavFix/NavFix";
import Loader from "react-loaders";


function Portfolio() {
  const data = portfolioContent;
  const [display, setDisplay] = useState([]);
  const handleDisplay = (id) => {
    if (display.includes(id)) {
      setDisplay(display.filter((itemId) => itemId !== id));
    } else {
      let newDisplay = [...display];
      newDisplay.push(id);
      setDisplay(newDisplay);
    }
  };

  return (
    <>
      <div className="row justify-content-around main-content container-css">
        <h1>Projects</h1>
        {data.map((item) => (
          <Card
            item={item}
            handleDisplay={handleDisplay}
            display={display}
            key={item.id}
          />
        ))}
        <NavFix />
      </div>
      <Loader type="cube-transition" />
    </>
  );
}

export default Portfolio;
