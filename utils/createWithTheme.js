import React from 'react';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme';

const myCache = createCache();
myCache.compat = true;

export default (Component) =>
  create(
    <CacheProvider value={myCache}>
      <ThemeProvider theme={theme}>{Component}</ThemeProvider>
    </CacheProvider>
  );
