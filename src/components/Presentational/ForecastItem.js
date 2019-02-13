import React from "react";
import styled from "styled-components";
import { iconChanger } from "../../helpers/iconTransform";
const dateStuff = str => {
  const cDate = new Date(str.split(" ")[0]);
  return {
    hour: str.split(" ")[1].slice(0, 5),
    month: cDate.toLocaleString("en-us", {
      month: "long"
    }),
    date: cDate.getDate(),
    day: cDate.toLocaleString("en-us", {
      weekday: "long"
    })
  };
};

function ForecastItem({ item }) {
  const itemInfo = dateStuff(item.dt_txt);
  return (
    <ForecastItemWrapper>
      <ForecastInfo>{itemInfo.day}</ForecastInfo>
      <ForecastInfo>
        {itemInfo.date} {itemInfo.month}
      </ForecastInfo>
      <ForecastInfo>{itemInfo.hour}</ForecastInfo>
      <i className={iconChanger(item.weather[0].icon)} />
      <ForecastInfo>{item.main.temp}°</ForecastInfo>
    </ForecastItemWrapper>
  );
}
const ForecastItemWrapper = styled.div`
  width: 140px;
  height: 170px;
  background-color: whitesmoke;
  color: #2e3131;
  border-radius: 4px;
  margin: 6px;
  i {
    font-size: 40px;
    margin: 3px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 960px) {
    width: 100px;
  }
`;

const ForecastInfo = styled.p`
  font-size: 18px;
  margin: 3px;
`;
export default ForecastItem;
