import React from "react";
import "./index.scss";
import BootstrapCard from "react-bootstrap/Card";

const Card = ({ item, handleDisplay, display }) => {
  return (
    <div className="my-card  col-md-5 my-5 px-5">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle move"></div>
      <div className="my-card-inner">
      <img className="card-img-top pt-5  card-img" src={item.thumb} />
      <div className="card-body">
        <h2 className="card-title">{item.appName}</h2>
        <hr/>
        <p className="card-text short-description">{item.shortDescription}</p>
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
            <p className="card-text">{item.description}</p>
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
        <hr/>
      </div>
      </div>
    </div>
  );
};

export default Card;
