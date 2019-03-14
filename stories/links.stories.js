import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Link } from '../src';

const stories = storiesOf('Links', module);

stories.add('default', () => (
  <Box m="regular" id="skip">
    <Link
      fontSize="size2"
      m="regular"
      href="#default"
      onClick={e => e.preventDefault()}
    >
      Default Link
    </Link>
    <Link
      fontSize="size2"
      m="regular"
      variant="muted"
      href="#muted"
      onClick={e => e.preventDefault()}
    >
      Muted Link
    </Link>
  </Box>
));
