
import { FetchWeatherData } from "../Service/weather.service";
import { put,select } from "redux-saga/effects";

import {  WEATHER_FETCH_START, WEATHER_FETCH_SUCCESS, WEATHER_FETCH_FAIL } from "../Actions/weather.actions";
export function* FetchWeatherInformation(action) {
    try {

      yield put({ type: WEATHER_FETCH_START });
  
      const {selectedCity} = yield select(state=>state.weatherState);

      const { data } = yield FetchWeatherData(selectedCity);
  

      yield put({ type: WEATHER_FETCH_SUCCESS, payload: data });
    } catch (error) {
      yield put({
        type: WEATHER_FETCH_FAIL,
        payload: error.response ? error.response.data.message : error.message
      });
    }
  }