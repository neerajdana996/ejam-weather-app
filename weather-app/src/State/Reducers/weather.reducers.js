import {
  WEATHER_FETCH,
  WEATHER_FETCH_START,
  WEATHER_FETCH_FAIL,
  UPDATE_SELECTED_CITIES,
  ADD_IN_SELECTED_CITIES,
  REMOVE_FROM_SELECTED_CITIES,
  UPDATE_SELECTED_CITY,
  WEATHER_FETCH_SUCCESS
} from "../Actions/weather.actions";

const initialState = {
  WeatherData: null,
  selectedCity: "",
  loading: false,
  error: null
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_FETCH_SUCCESS:
      return { ...state, WeatherData: payload, error: null, loading: false };
    case WEATHER_FETCH_START:
      return { ...state, loading: true, error: null, WeatherData: undefined };

   

    case WEATHER_FETCH_FAIL:
      return { ...state, error: payload, WeatherData: null, loading: false };

    case UPDATE_SELECTED_CITY:
      return { ...state,WeatherData:null, selectedCity:payload };

    default:
      return { ...state };
  }
};
