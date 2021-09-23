import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-6">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-start mt-5 mb-2">
        <span className="today-temp">{Math.round(props.data.temperature)}</span>
        <span className="units">
          <a href="/">℃</a>|<a href="/">℉</a>
        </span>
      </div>
      <ul className="current-conditions text-center">
        <li>feels like: {Math.round(props.data.feelsLike)}℃</li>
        <li>humidity: {Math.round(props.data.humidity)} %</li>
        <li>wind speed: {Math.round(props.data.wind)} m/s</li>
      </ul>
    </div>
  );
}
