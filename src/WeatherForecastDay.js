import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day=date.getDay()
   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day]
  }

  return (
    <div className="text-center">
      <div>{day()}</div>
      <WeatherIcon code={`${props.forecast.weather[0].icon}`} width={60} />
      <div className="forecast-temps">
        <span>{Math.round(props.forecast.temp.max)}° </span>{" "}
        <span className="text-muted">{Math.round(props.forecast.temp.min)}°</span>
      </div>
    </div>
  );
}
