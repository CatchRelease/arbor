import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme';

export default (Component) => {
  const wrappedComponent = (
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>
  );

  return render(wrappedComponent);
};
