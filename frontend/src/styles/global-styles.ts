import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Bosch Sans Regular';
    src: url('../../../public/fonts/BoschSans-Regular-v5_003.ttf');
  }

  @font-face {
    font-family: 'Bosch Sans Bold';
    src: url('../../../public/fonts/BoschSans-Bold-v5_003.ttf');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Bosch Sans Regular';
  }

  body{
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;