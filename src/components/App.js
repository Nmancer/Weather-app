import React from "react";
import Global from "../helpers/Global";
import WeatherContainer from "./Container/WeatherContainer";
import HeaderComp from "./Presentational/HeaderComp";
import "../css/weather-icons.min.css";

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
