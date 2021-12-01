import { FC, ReactElement } from 'react';

import { ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react';

import theme from '../src/theme';

const Wrapper: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Wrapper, ...options });
