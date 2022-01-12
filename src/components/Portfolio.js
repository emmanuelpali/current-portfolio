import { indexOf } from "lodash";
import React, { useState } from "react";
import portfolioContent from "../DATA/data";
import "../styles/portfolio.css";

function Portfolio() {
  const data = portfolioContent;
  const [projectId, setProjectId] = useState([]);
  const [display, setDisplay] = useState([]);
  function handleDisplay(id) {
    if (display.indexOf(id) === -1) {
      setDisplay((display) => [...display, id]);
      setProjectId((projectId) => [...projectId, id]);
    } else if (projectId.indexOf(id) > -1) {
      setDisplay((display) => display.splice(display.indexOf(id), 1));
      setProjectId((projectId) => projectId.splice(projectId.indexOf(id), 1));
    }
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
            {display.indexOf(item.id) > -1 ? (
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
