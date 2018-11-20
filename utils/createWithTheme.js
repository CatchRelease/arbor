import React from 'react';
import { create } from 'react-test-renderer'; // eslint-disable-line import/no-extraneous-dependencies
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme';

export default component =>
  create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
