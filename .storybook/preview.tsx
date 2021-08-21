import theme, { GlobalStyle } from '../src/theme';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
));
