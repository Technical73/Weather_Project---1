import React, { useState } from "react";
import cloudy from "../assets/cloudy.jpg";
import hot from "../assets/hot.jpg";
import Inputs from "../components/Inputs";
import Temperature from "../components/Temperature";
import "./index.css";
import Descriptions from "../components/Descriptions";
import { useEffect } from "react";
import { getFormattedData } from "../WeatherServices";

const MainWeather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("paris");
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hot);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getFormattedData(city, units);
      setWeather(result);
      const threshold = units === "metric" ? 20 : 60;
      if (result.temp <= threshold) setBg(cloudy);
      else setBg(hot);
    };

    fetchData();
  }, [units, city]);
  const handleClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCesius = currentUnit === "C";
    button.innerText = isCesius ? "°F" : "°C";
    setUnits(isCesius ? "metric" : "imperial");
  };
  return (
    <>
      <div
        className="main_weather"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="overlay">
          {weather && (
            <div className="container">
              <Inputs handleClick={handleClick} city={city} setCity={setCity} />
              <Temperature weather={weather} units={units} />
              <Descriptions weather={weather} units={units} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainWeather;
