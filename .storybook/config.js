import React, { Fragment } from 'react';
import { addDecorator, configure } from '@storybook/react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { withA11y } from '@storybook/addon-a11y';

import { reset, theme } from '../src';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <Fragment>
    <Global styles={reset} />
    {story()}
  </Fragment>
));
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(withA11y);

configure(loadStories, module);
