import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import buttons from './buttons';
import colors from './colors';
import inputs from './inputs';
import pill from './pill';
import text from './text';
import image from './image';
import card from './card';

export const GlobalStyle = createGlobalStyle`
  ${normalize}


  html, body {
    font-family: Source Sans Pro, sans-serif;
    padding: 0;
    color: ${colors.body};
    font-size: 62.5%;
    overflow: auto;
    height: 100vh;
  }

  #__next {
    height: 100%;
  }

  body {
    font-size: 100%;
  }

  a {
    font-style: none;
    text-decoration: none;
  }

  ::selection {
    color: white;
    background-color: ${colors.primary};
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
}
`;

const theme = {
  fonts: {
    body: 'Source Sans Pro, sans-serif',
    heading: 'Source Sans Pro, sans-serif',
  },

  breakpoints: ['40rem', '52rem', '64rem'],

  fontSizes: [
    '0.8rem',
    '1rem',
    '1.2rem',
    '2.0rem',
    '2.4rem',
    '3.2rem',
    '4.8rem',
    '6.4rem',
    '9.6rem',
  ],

  radii: {
    default: 4,
    card: 6,
    circle: 99999,
  },

  colors,

  inputs,

  fontWeights: {
    body: 400,
    heading: 700,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  space: ['0', '0.4rem', '0.8rem', '1.6rem', '3.2rem', '6.4rem', '12.8rem', '25.6rem', '51.2rem'],

  buttons,

  pill,

  text,

  image,

  card,
};

export default theme;
