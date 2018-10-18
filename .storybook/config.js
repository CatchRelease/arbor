import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { globalStyles, theme } from '../src';

globalStyles();

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
