import axios from "axios";

import { API_URL } from "../../constants";

export const FetchWeatherData = async (cityName) => {
    const query = `?city=${cityName}`
  return axios.get(`${API_URL}/api/weather/getbycityname${query}`);
};