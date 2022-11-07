import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import portfolioContent from "../../DATA/data";
import Card from "../Card";

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
    <div className="main-content">
      <h2>Projects</h2>
      {data.map((item) => (
        <Card
          item={item}
          handleDisplay={handleDisplay}
          display={display}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Portfolio;
