import React from "react";
import styled from "styled-components";

const HeaderComp = () => (
  <Header>
    <HeaderItem>WEATHERAPP</HeaderItem>
  </Header>
);

const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #2e3131;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderItem = styled.h1`
  color: white;
  font-size: 26px;
`;

export default HeaderComp;
