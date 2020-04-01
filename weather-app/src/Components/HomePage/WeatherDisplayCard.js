import React from "react";
import { useSelector } from "react-redux";

export default function WeatherDisplayCard() {
  const { WeatherData, loading } = useSelector(state => state.weatherState);

  const { lat, lon } = WeatherData.coord;

  return (
    <>
      <div
        class="weather-card shadow-sm my-2"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,.6) 0%, rgba(9,9,121,.45) 35%, rgba(0,212,255,.45) 100%),url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80')"
        }}
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-7 px-0">
                <span className="temp">
                  {WeatherData.main.temp}
                  <sup>&deg;</sup>
                  C
                  <br />
                  <span>
                    {WeatherData.name} , {WeatherData.sys.country}
                  </span>
                </span>
              </div>
              <div className="col-5 px-0">
                <span className="temp-icon">
                  <img
                    src={`http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`}
                  />
                  <br />
                  <span>{WeatherData.weather[0].main}</span>
                </span>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-lg-4 col-md-4 col-sm-12 pr-0 details text-left">
                <span className="heading">
                  Wind:
                  <span className="description">
                    {WeatherData.wind.speed} m/s
                  </span>
                </span>
                <br />
                <span className="heading">
                  Feels Like:
                  <span className="description">
                    {WeatherData.main.feels_like}
                  </span>
                </span>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 pr-0 details text-center">
                <span className="heading">
                  Temp Min:
                  <span className="description">
                    {WeatherData.main.temp_min} <sup>&deg;</sup>
                  C
                  </span>
                </span>
                <br />
                <span className="heading">
                  Temp Max:
                  <span className="description">
                    {WeatherData.main.temp_max} <sup>&deg;</sup>
                  C
                  </span>
                </span>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 pr-0 details text-right">
                <span className="heading">
                  Pressure:
                  <span className="description">
                    {WeatherData.main.pressure} Pa
                  </span>
                </span>
                <br />
                <span className="heading">
                  Humidity:
                  <span className="description">
                    {WeatherData.main.humidity}
                  </span>
                </span>
              </div>
            </div>
            <a className="btn btn-light mt-3 float-right"
              href={`http://maps.google.com/maps?q=${lat},${lon}`}
              target="_blank"
            >
              See on map
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
