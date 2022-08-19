import React, { useState } from "react";
import portfolioContent from "../DATA/data";

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
      <h2>My Projects</h2>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-img">
            <img src={item.thumb} alt={item.alt} />
          </div>
          <div className="card-header">
            <h3>{item.appName}</h3>
            <span>....</span>
            <p>{item.shortDescription}</p>
            <button
              className="btn"
              id={item.id}
              onClick={() => handleDisplay(item.id)}
            >
              {display.includes(item.id) ? (
                <span>Read Less</span>
              ) : (
                <span>Read More</span>
              )}
            </button>
            {display.includes(item.id) ? (
              <>
                <h3>User Story</h3>
                <p>{item.description}</p>
              </>
            ) : null}
            <a
              href={item.webAddress}
              rel="noreferrer"
              target="_blank"
              className="btn"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
