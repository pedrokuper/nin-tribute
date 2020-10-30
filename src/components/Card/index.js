import React from "react";
import Tilt from "react-tilt";
import "./style.scss";

function Card({ image, name, desc, year }) {
  const options = {
    max: 10,
    perspective: 500,
    speed: 100,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="card-inner-container">
      <Tilt
        className="Tilt"
        options={options}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img className="card-img" src={image} alt={`${name} thumbnail`} />{" "}
        </div>
      </Tilt>
      {/* <div>
        
      </div> */}
    </div>
  );
}

export default Card;
