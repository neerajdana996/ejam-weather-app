import React from "react";
import { CityCardList } from "../Components/HomePage/CityCardList";
import { useDispatch, useSelector } from "react-redux";
import { WEATHER_FETCH } from "../State/Actions/weather.actions";
import WeatherDisplayCard from "../Components/HomePage/WeatherDisplayCard";

export default function HomePage() {
  const dispatch = useDispatch();
  const UpdateWeatherData = () => {
    dispatch({ type: WEATHER_FETCH });
  };
  const { WeatherData ,loading} = useSelector(state => state.weatherState);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="row">
                <div className="col-6 ml-auto">
                  <button
                    onClick={UpdateWeatherData}
                    className="btn float-right btn-primary bg-indigo"
                  >
                    Get Data
                  </button>
                </div>
              </div>
              <div className="card border-0">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <CityCardList></CityCardList>
                  </div>
                  <div className="col-lg-9 col-md-8 col-sm-12">
                      {loading && <p>
                          Please with while we are fetching you  weather
                      </p>}
                     {WeatherData &&  <WeatherDisplayCard></WeatherDisplayCard>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
