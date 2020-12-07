import React from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { create } from 'react-test-renderer';
import theme from '../src/theme';

const myCache = createCache({ key: 'test' });
myCache.compat = true;

export default (Component) =>
  create(
    <CacheProvider value={myCache}>
      <ThemeProvider theme={theme}>{Component}</ThemeProvider>
    </CacheProvider>
  );
