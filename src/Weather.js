import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="row input-group mb-3">
        <input
          type="search"
          placeholder="Enter a city..."
          className="col-10 form-control"
          autocomplete="off"
        />
        <input type="submit" value="Search" className="col-2 btn btn-primary" />
      </form>

      <p className="time" id="date">
        18:48, May 13 2024
      </p>

      <div className="current-city">
        <h1>Cologne</h1>
      </div>

      <div className="row today">
        <div className="col-1">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
            className="icon"
          />
        </div>
        <div className="col-2">
          <span className="temperature">23</span>
          <span className="unit"> °C</span>
        </div>
        <div className="col-6">
          <hr className="line" />
        </div>
        <div className="col-3">
          <ul className="climate-values">
            <li className="description">Partly cloudy</li>
            <li>Humidity: 86 %</li>
            <li>Wind speed: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
