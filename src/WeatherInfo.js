import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  let [unit, setUnit] = useState(`celsius`);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }

  function fahrenheit(temp) {
    return (temp * 9) / 5 + 32;
  }

  function miles(speed) {
    return speed * 2.237;
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherInfo">
        <div className="row d-flex align-items-start mt-4">
          <div className="col-6">
            <h1>{props.data.city}</h1>
          </div>
          <div className="col-6">
            <FormattedDate date={props.data.date} />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <ul className="current-conditions">
              <li>feels like: {Math.round(props.data.feelsLike)}℃</li>
              <li>humidity: {Math.round(props.data.humidity)} %</li>
              <li>wind speed: {Math.round(props.data.wind)} m/s</li>
            </ul>
            <div className="d-flex align-items-start">
              <span className="today-temp">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">
                °C |
                <a href="/" onClick={showFahrenheit}>
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <div className="row d-flex align-items-start mt-4">
          <div className="col-6">
            <h1>{props.data.city}</h1>
          </div>
          <div className="col-6">
            <FormattedDate date={props.data.date} />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <ul className="current-conditions">
              <li>
                feels like: {Math.round(fahrenheit(props.data.feelsLike))}°F
              </li>
              <li>humidity: {Math.round(props.data.humidity)} %</li>
              <li>wind speed: {Math.round(miles(props.data.wind))} mph</li>
            </ul>
            <div className="d-flex align-items-start">
              <span className="today-temp">
                {Math.round(fahrenheit(props.data.temperature))}
              </span>
              <span className="units">
                <a href="/" onClick={showCelsius}>
                  {" "}
                  °C{" "}
                </a>
                |°F
              </span>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
      </div>
    );
  }
}
