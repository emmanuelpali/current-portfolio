import React from "react";
import "./index.scss";

const Card = ({ item, handleDisplay, display }) => {
  return (
    <div className="card">
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
  );
};

export default Card;
