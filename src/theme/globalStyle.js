import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  html {
    box-sizing: border-box;
  
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.5;
  }
  
  body {
    font-family: 'Jura', Georgia, Cambria, 'Times New Roman', Times, serif;
    line-height: 1.5;
  
    margin: 0;
    padding: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
