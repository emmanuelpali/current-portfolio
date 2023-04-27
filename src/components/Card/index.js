import React from "react";
import "./index.scss";
import BootstrapCard from "react-bootstrap/Card";

const Card = ({ item, handleDisplay, display }) => {
  return (
    <div className="card  text-bg-warning  col-md-5 mb-5 p-0">
      <img className="card-img-top  card-img shadow" src={item.thumb} />
      <div className="card-body">
        <h2 className="card-title">{item.appName}</h2>
        <hr/>
        <p class="card-text short-description">{item.shortDescription}</p>
        <button
          className="flat-button btn"
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
            <p class="card-text">{item.description}</p>
          </>
        ) : null}
        <a
          href={item.webAddress}
          rel="noreferrer"
          target="_blank"
          className="flat-button btn"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default Card;
