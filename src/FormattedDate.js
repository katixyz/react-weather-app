import React from "react";

export default function FormattedDate(props) {
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
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();

  console.log(props.date);
  if (minutes > 9) {
    return (
      <div>
        {day}, {hour}:{minutes}
      </div>
    );
  } else {
    return (
      <div>
        {day}, {hour}:0{minutes}
      </div>
    );
  }
}
