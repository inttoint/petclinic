import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Jura:300,400,500,600&display=swap&subset=cyrillic');
  
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

export const theme = {
  colorBlack: '#000',
  colorWhite: '#fff',

  //Primary
  colorPrimary: '#333', //rgb(51, 51, 51)
  colorPrimaryDark: '#212121', //rgb(33, 33, 33)
  colorPrimaryDarker: 'rgb(18, 18, 18)',

  //Secondary
  colorSecondaryLightest: 'rgb(231, 100, 95)',
  colorSecondaryLighter: 'rgb(201, 113, 99)',
  colorSecondaryLight: 'rgb(153, 85, 74)',
  colorSecondary: 'rgb(139, 63, 54)',
  colorSecondaryDark: 'rgb(133, 63, 54)',
  colorSecondaryDarker: 'rgb(129, 60, 52)',
  colorSecondaryMoreDarkness: 'rgba(116, 53, 45, 0.6)',

  //Neutral
  colorGreyLight: '#f5f5f5',
  colorGrey: '#eee',
  colorGreyDark: '#dcdcdc',
  colorGreyDarker: '#b4b4b4',
  colorGreyDarkest: '#666',

  mobile: '576px'
};
