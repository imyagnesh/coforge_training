import React from "react";

const Card = ({ countryName, countryWeather }) => {
  return (
    <div style={{ width: "18rem", background: "lightblue" }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: "white" }}>
          {countryName}
        </h5>
        <p className="card-text" style={{ color: "white" }}>
          {countryWeather}
        </p>
      </div>
    </div>
  );
};

export default Card;