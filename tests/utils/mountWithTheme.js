import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/theme';

export default (Component, mountOptions = {}) => {
  const wrappedComponent = (
    <ThemeProvider theme={theme}>{Component}</ThemeProvider>
  );

  const mounted = mount(wrappedComponent, mountOptions);

  return mounted.find(Component.type);
};
