import React, { useEffect, useState } from "react";
import Search from "./Search";
import "./Weather.css";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [weatherData, setWeatherData] = useState();

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=54df3e588862e3c06bf8ed9af59330c3`
      );

      const data = await respone.json();

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Paris");
  }, []);

  if (errorMsg) return <div>Error occured: {errorMsg}</div>;

  return (
    <div className="weather">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="/">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData?.weather?.[0]?.description}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
