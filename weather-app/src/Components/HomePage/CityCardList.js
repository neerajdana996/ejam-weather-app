import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CityCard } from "./CityCard";

export const CityCardList = () => {
  const [cities, setCities] = useState(["Tornado", "California" , "New York"]);

  return (
    <>
      <ul class="list-group ">
        {cities.map(city => {
          return <CityCard city={city}></CityCard>;
        })}
      </ul>
    </>
  );
};
