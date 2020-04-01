import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_SELECTED_CITY } from "../../State/Actions/weather.actions";

export const CityCard = ({ city }) => {
  const { selectedCity } = useSelector(state => state.weatherState);

  const dispatch = useDispatch();
  const UpdateSelectedCity = () => {
    if (selectedCity != city)
      dispatch({ type: UPDATE_SELECTED_CITY, payload: city });
  };
  const classname = `list-group-item shadow-none border-0  rounded my-2 ${
    selectedCity == city ? "bg-indigo text-white" : "bg-light"
  }`;
  return (
    <li
      data-toggle="tooltip"
      data-placement="top"
      title="Click on the city to select it "
      onClick={UpdateSelectedCity}
      className={classname}
    >
      {city}
    </li>
  );
};
