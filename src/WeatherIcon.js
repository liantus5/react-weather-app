import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "icons/32.png",
    "01n": "icons/31.png",
    "02d": "icons/44.png",
    "02n": "icons/29.png",
    "03d": "icons/26.png",
    "03n": "icons/26.png",
    "04d": "icons/28.png",
    "04n": "icons/27.png",
    "09d": "icons/40.png",
    "09n": "icons/40.png",
    "10d": "icons/39.png",
    "10n": "icons/45.png",
    "11d": "icons/37.png",
    "11n": "icons/47.png",
    "13d": "icons/15.png",
    "13n": "icons/15.png",
    "50d": "icons/20.png",
    "50n": "icons/20.png",
  };
  return <img src={codeMapping[props.code]} alt="icon" />;
}
