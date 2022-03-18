import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  body{
      font-family: 'Roboto',sans-serif;
  }
  :root{
    --primary-color: #3aa5f7;
  }
`;

export default GlobalStyle;
