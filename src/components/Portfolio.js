import { indexOf } from "lodash";
import React, { useState } from "react";
import portfolioContent from "../DATA/data";
import "../styles/portfolio.css";

function Portfolio() {
  const data = portfolioContent;
  const [projectID, setProjectID] = useState();
  const [display, setDisplay] = useState(false);
  function handleDisplay(id) {
    console.log(id);
    setDisplay((display) => !display);
    setProjectID(id);
  }

  return (
    <div className="main-content">
      <h2>My Projects</h2>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-img">
            <img src={item.thumb} alt={item.alt} />
          </div>
          <div className="card-header">
            <h2>{item.appName}</h2>
            <span>....</span>
            <p>{item.shortDescription}</p>
            {display && projectID === item.id ? (
              <>
                <h2>User Story</h2>
                <p>{item.description}</p>
                <button onClick={() => handleDisplay(item.id)}>
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
              </>
            ) : (
              <button onClick={() => handleDisplay(item.id)}>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            )}
            <a href={item.webAddress} rel="noreferrer" target="_blank">
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
