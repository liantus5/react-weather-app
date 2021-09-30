import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="FormattedDate text-end">
      <ul className="date">
        <li className="text-capitalize">
          {month} {date}, {year}
        </li>
        <li>{day}</li>
        <li>
          {hours}:{minutes}
        </li>
      </ul>
    </div>
  );
}
