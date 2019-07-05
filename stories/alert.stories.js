import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import { Alert, Box, Heading } from '../src';
import VARIANTS from '../src/Alert/variants';
import INTENTS from '../src/Alert/intents';

const ON_CLOSE_OPTIONS = ['', () => alert('Close Me!')]; // eslint-disable-line no-undef
const stories = storiesOf('Alerts', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Box as="section" p="regular">
    <Heading.h1>Alerts</Heading.h1>

    <Alert
      details={text(
        'Details',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      )}
      intent={select('Intent', ['', ...INTENTS])}
      message={text(
        'Message',
        'Hooray! You did it. Your Source is now sending data.'
      )}
      onClose={select('On Close', ON_CLOSE_OPTIONS)}
      variant={select('Variant', ['', ...VARIANTS])}
    />
  </Box>
));
