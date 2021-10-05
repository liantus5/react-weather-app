import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  useEffect(() => {
    setReady(false);
    setUnit(props.unit);
  }, [props.coords, props.unit]);

  console.log(props.coords);

  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [unit, setUnit] = useState(`metric`);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="d-flex justify-content-between">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <WeatherForecastDay forecast={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiKey = `8d6f45348f7c55ee8c93612da2d88459`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
    return `Loading...`;
  }
}
