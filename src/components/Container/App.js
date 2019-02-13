import React from "react";
import Global from "../../helpers/Global";
import WeatherContainer from "./WeatherContainer";
import HeaderComp from "../Presentational/HeaderComp";
import "../../css/weather-icons-wind.css";
import "../../css/weather-icons-wind.min.css";
import "../../css/weather-icons.css";
import "../../css/weather-icons.min.css";

const App = () => {
  return (
    <>
      <Global />
      <HeaderComp />

      <WeatherContainer />
    </>
  );
};

export default App;
