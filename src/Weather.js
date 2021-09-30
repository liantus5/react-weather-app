import React, { useState } from "react";
import axios from "axios";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
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
      coords: response.data.coord,
    });
  }

  function geolocation() {
    navigator.geolocation.getCurrentPosition(accessLocation);
  }

  function accessLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = `e443ae2d9c3fd770036c3beff05b41cf`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
      <div className="Weather">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            type="search"
            className="col-9"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" className="button col-2" />
          <button className="button col-1" onClick={geolocation}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
        </form>
        <WeatherInfo data={weatherResponse} />
        <WeatherForecast coords={weatherResponse.coords} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
