import React from "react";
import styled from "styled-components";
import ForecastItem from "./ForecastItem";

const Forecast = props => {
  return (
    <ForecastWrapper>
      {props.weatherList.map(
        (item, i) =>
          i % 2 === 0 && <ForecastItem item={item} key={item.dt_txt} />
      )}
    </ForecastWrapper>
  );
};

const ForecastWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export default Forecast;
