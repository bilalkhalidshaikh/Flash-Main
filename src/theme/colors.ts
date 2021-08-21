const colorScheme = {
  purple: '#3000B9',
  lightPurple: '#C7BBE8',

  white: '#FFFFFF',
  offWhite: '#F9F9F9',
  wildSand: '#F6F6F6',

  black: '#000000',
  gray: '#767676',
  darkGray: '#9B9B9B',
  codGray: '#111111',
  silverChalice: '#AEAEAE',

  gray_1: '#F4F4F4',
  gray_2: '#D9D9D9',
  gray_3: '#A1A1A1',

  dark_1: '#828282;',
  dark_4: '#2D2D2D',

  error: '#F39393',

  light_2: '#FAFAFA',
};

const colors = {
  ...colorScheme,
  primary: colorScheme.purple,
  secondary: colorScheme.lightPurple,
  body: colorScheme.black,
  heading: colorScheme.darkGray,
  background: '#fff',

  danger: colorScheme.purple,
  success: '#20CA89',
  warning: colorScheme.purple,
};

export default colors;
