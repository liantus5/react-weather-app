import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div class="text-center">
      <div>Mon</div>
      <WeatherIcon code={`03d`} width={50} />
      <div>
        <span>19°</span>
        <span class="text-muted">15°</span>
      </div>
    </div>
  );
}
