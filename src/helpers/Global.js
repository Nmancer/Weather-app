import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
const Global = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  `;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export { MainWrapper };
export default Global;
