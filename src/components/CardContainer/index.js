import React from "react";
import Card from "../Card";

import "./style.scss";

function CardContainer({ albumData }) {
  return (
    <div className="card-container">
      {albumData.map((album, key) => {
        return (
          <Card
            key={key}
            image={album.image}
            year={album.year}
            desc={album.desc}
            name={album.name}
          />
        );
      })}
    </div>
  );
}

export default CardContainer;
