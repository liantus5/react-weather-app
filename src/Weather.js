import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  let [weatherResponse, setWeatherResponse] = useState({
    ready: false,
  });
  let [city, setCity] = useState(props.defaultCity);

  function search(){
let apiKey=""
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherResponse.ready) {
    return (
      <div className="Weather form-control mt-5 p-3">
        <form className="row" onSubmit={handleSubmit}>
          <input
            type="search"
            className="col-9"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" class="btn btn-primary col-3" />
        </form>

        <div className="row mt-3">
          <div className="col-6">
            <h1>{city}</h1>
          </div>
          <div className="col-6">
            <ul className="date">
              <li>sept 23, 2021</li>
              <li>Thursday</li>
              <li>11:45</li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="today-temp">10</span>
          <span className="units">
            <a href="/">℃</a>|<a href="/">℉</a>
          </span>
        </div>
        <ul className="current-conditions text-center">
          <li>feels like:</li>
          <li>humidity</li>
          <li>wind speed</li>
        </ul>
      </div>
    );
  } else {
    return "Loading...";
  }
}
