import { configure } from '@storybook/react';
import { injectGlobalStyles } from '../src/global-styles';

injectGlobalStyles();

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
