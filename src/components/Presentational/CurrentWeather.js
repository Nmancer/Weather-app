import React from "react";
import styled from "styled-components";
import { iconChanger } from "../../helpers/iconTransform";

const CurrentWeather = ({ city, temp, windSpeed, description, icon }) => {
  return (
    <Card primary={icon.split("")[icon.length - 1] === "d"}>
      <div>
        <CardInfoBig> {city} </CardInfoBig>

        <Temperature>{temp}°</Temperature>
        <Description> {description} </Description>
        <Wind>
          <CardInfoSmall>
            <i className="wi wi-strong-wind" /> {windSpeed} m/s
          </CardInfoSmall>
        </Wind>
      </div>
      <div>
        <i className={iconChanger(icon)} />
      </div>
    </Card>
  );
};

const Card = styled.div`
  margin: 20px auto;
  width: 700px;
  height: 320px;

  background-image: linear-gradient(
    ${props =>
      !props.primary
        ? "315deg, #f7b42c 0%, #fc575e 74%"
        : "316deg, #58427c 0%, #746cc0 74%"}
  );
  color: white;
  border-radius: 20px;
  i {
    font-size: 200px;
    color: white;
  }
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 960px) {
    width: 350px;
    height: 250px;
    i {
      font-size: 100px;
    }
  }
`;
const CardInfoBig = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 20px;
  }
`;
const Temperature = styled.h3`
  font-size: 62px;
  @media (max-width: 960px) {
    font-size: 40px;
  }
`;
const Description = styled.h3`
  margin-top: 10px;
  font-size: 42px;
`;
const Wind = styled.div`
  margin-top: 5px;
  i {
    font-size: 40px;
  }
`;

const CardInfoSmall = styled.h4`
  font-size: 16px;
`;

export default CurrentWeather;
