import React from "react";

export default function ConvertTemperature(props) {
  return (
    <div className="displayTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit"> °C</span>
    </div>
  );
}
