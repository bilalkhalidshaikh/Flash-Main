export default {
  default: {
    color: 'primary',
    borderRadius: '0.8rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray_3',
    outline: 'none',
    background: 'white',
    padding: '14px 12px',
    fontSize: '1.6rem',
    fontWeight: '300',

    '&:disabled': {
      backgroundColor: 'wildSand',
      color: 'gray_3',
      cursor: 'not-allowed',
    },

    '&::placeholder': {
      lineHeight: '1.9rem',
      color: 'gray_3',
    },

    '&:focus': {
      borderColor: 'primary',
    },

    '&:focus::placeholder': {
      color: 'primary',
    },
  },
  error: {
    variant: 'inputs.default',
    borderColor: 'error',
    color: 'error',

    '&::placeholder': {
      color: 'error',
    },

    '&:focus': {
      borderColor: 'error',
    },

    '&:focus::placeholder': {
      color: 'error',
    },
  },
  sizes: {
    normal: {
      px: 2,
      py: 2,
    },
    large: {
      fontSize: '2.0rem',
      lineHeight: '1.6rem',
      fontWeight: '600',
      height: '5rem',
      width: '26.5rem',
    },
    small: {
      px: 2,
      py: 1,
    },
  },
};
