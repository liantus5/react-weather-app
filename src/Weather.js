import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  let [weatherResponse, setWeatherResponse] = useState({
    ready: false,
  });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherResponse({
      ready: true,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      lastUpdated: response.data.lastupdate,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = `e443ae2d9c3fd770036c3beff05b41cf`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherResponse.ready) {
    return (
      <div className="Weather p-3">
        <form className="row" onSubmit={handleSubmit}>
          <input
            type="search"
            className="col-9"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" className="btn btn-primary col-3" />
        </form>
        <WeatherInfo data={weatherResponse} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
