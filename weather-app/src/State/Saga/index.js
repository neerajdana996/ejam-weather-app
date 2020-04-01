import { takeEvery, takeLatest } from "redux-saga/effects";
import { WEATHER_FETCH } from "../Actions/weather.actions";
import { FetchWeatherInformation } from "./weather.saga";
export function* watchAuth() {
    
    yield takeEvery(WEATHER_FETCH, FetchWeatherInformation);
   
}
