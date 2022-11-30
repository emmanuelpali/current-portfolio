import React from "react";
import "./index.scss";
import BootstrapCard from "react-bootstrap/Card";

const Card = ({ item, handleDisplay, display }) => {
  return (
    <BootstrapCard className="text-center card-css">
      <BootstrapCard.Img className="fluid" src={item.thumb} />
      <BootstrapCard.Body className="card-body-css">
        <BootstrapCard.Title>{item.appName}</BootstrapCard.Title>
        <span>....</span>
        <BootstrapCard.Text>{item.shortDescription}</BootstrapCard.Text>
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
            <BootstrapCard.Title>Details</BootstrapCard.Title>
            <BootstrapCard.Text>{item.description}</BootstrapCard.Text>
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
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
