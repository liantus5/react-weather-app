import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div class="d-flex justify-content-between">
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
    let apiKey = `e443ae2d9c3fd770036c3beff05b41cf`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return `Loading...`;
  }
}
