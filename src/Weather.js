import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="row input-group mb-3" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="col-10 form-control"
            autocomplete="off"
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="col-2 btn btn-primary"
          />
        </form>

        <FormattedDate date={weatherData.date} />

        <div className="current-city">
          <h1>{city}</h1>
        </div>

        <div className="row today">
          <div className="col-1">
            <img src={weatherData.icon} alt="partly cloudy" className="icon" />
          </div>
          <div className="col-2">
            <WeatherTemperature celsius={weatherData.temperature} />
          </div>
          <div className="col-6">
            <hr className="line" />
          </div>
          <div className="col-3">
            <ul className="climate-values">
              <li className="description text-capitalize">
                {weatherData.description}
              </li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind speed: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
