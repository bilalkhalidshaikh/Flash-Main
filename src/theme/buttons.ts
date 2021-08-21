import colors from './colors';

export default {
  default: {
    cursor: 'pointer',
    outline: 'none',
    fontSize: '1.2rem',
    fontWeight: 'normal',
    color: 'white',
    bg: 'gray',
    borderRadius: '5rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    fontFamily: 'body',
    letterSpacing: '1.5px',

    '&:active, &:focus': {
      boxShadow: `0px 0px 0px 1px ${colors.purple}`,
    },

    '&:hover': {},

    '&[disabled], &:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'all !important',
      color: 'gray',
      bg: 'lightGray',

      '&:hover': {
        borderColor: 'transparent',
      },
    },
  },

  primary: {
    variant: 'buttons.default',
    bg: 'primary',
  },

  secondary: {
    variant: 'buttons.default',
    bg: 'white',
    color: 'primary',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'primary',
  },

  disabled: {
    variant: 'buttons.default',
    bg: 'gray_2',
    color: 'white',
    border: 'none',
    cursor: 'normal',

    '&:active, &:focus': {
      boxShadow: 'none',
    },
  },

  text: {
    variant: 'buttons.default',
    color: 'primary',
    bg: 'transparent',

    '&:hover': {
      borderColor: 'primary',
    },
  },

  outline: {
    variant: 'buttons.default',
    color: 'primary',
    bg: 'transparent',
    borderColor: 'primary',

    '&:hover': {
      borderColor: 'green',
    },
  },

  sizes: {
    medium: {
      width: '15rem',
      height: '4rem',
      borderRadius: '5rem',
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '1.6rem',
    },
    large: {
      fontSize: '2.0rem',
      lineHeight: '1.6rem',
      fontWeight: '600',
      height: '5rem',
      width: '24rem',
    },
    small: {
      px: 2,
      py: 1,
    },
  },
};
