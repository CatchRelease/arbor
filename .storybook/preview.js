import React from 'react';

import { Global, ThemeProvider } from '@emotion/react';

import { reset, theme } from '../src';

// eslint-disable-next-line import/prefer-default-export
export const decorators = [
  (Story) => (
    <>
      <Global styles={reset} />
      <Story />
    </>
  ),
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];
