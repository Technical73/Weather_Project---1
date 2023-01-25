import React from "react";

const Temperature = ({ weather, units }) => {
  return (
    <>
      <div className="section section_temperature">
        <div className="icon">
          <h2>{`${weather.name}, ${weather.country}`}</h2>
          <img
            src={weather.iconURL}
            alt="Icon of the Cloudy"
            style={{
              width: "60px",
              height: "60px",
            }}
          ></img>
          <h2>{weather.description}</h2>
        </div>
        <div className="temperature">
          <h2>
            {`${weather.temp.toFixed()}`}°{units === "metric" ? "C" : "F"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Temperature;
