import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import notes from './alert.md';
import {
  BannerAlert,
  Box,
  CardAlert,
  Heading,
  InlineAlert,
  PaneAlert,
  ToastAlert
} from '../src';
import INTENTS from '../src/Alert/intents';

const ON_CLOSE_OPTIONS = ['', () => alert('Close Me!')]; // eslint-disable-line no-alert, no-undef
const stories = storiesOf('Alerts', module);
stories.addDecorator(withKnobs);

stories.add(
  'Banner',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Banner Alert</Heading.h1>

      <BannerAlert
        details={text(
          'Details',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        )}
        intent={select('Intent', INTENTS, INTENTS[0])}
        message={text('Message', 'Hooray!')}
        onClose={select('On Close', ON_CLOSE_OPTIONS)}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'Card',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Card Alert</Heading.h1>

      <CardAlert
        details={text(
          'Details',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        )}
        intent={select('Intent', [...INTENTS, ''], INTENTS[0])}
        message={text(
          'Message',
          'Hooray! You did it. Your Source is now sending data.'
        )}
        onClose={select('On Close', ON_CLOSE_OPTIONS)}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'Inline',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Box Alert</Heading.h1>

      <InlineAlert
        details={text('Details', '')}
        intent={select('Intent', INTENTS, INTENTS[0])}
        message={text(
          'Message',
          'Hooray! You did it. Your Source is now sending data.'
        )}
        onClose={select('On Close', ON_CLOSE_OPTIONS)}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'Pane',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Pane Alert</Heading.h1>

      <PaneAlert
        details={text(
          'Details',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        )}
        intent={select('Intent', [...INTENTS, ''], INTENTS[0])}
        message={text(
          'Message',
          'Hooray! You did it. Your Source is now sending data.'
        )}
        onClose={select('On Close', ON_CLOSE_OPTIONS)}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);

stories.add(
  'Toast',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Toast Alert</Heading.h1>

      <ToastAlert
        details={text(
          'Details',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        )}
        intent={select('Intent', [...INTENTS, ''], INTENTS[0])}
        message={text(
          'Message',
          'Hooray! You did it. Your Source is now sending data.'
        )}
        onClose={select('On Close', ON_CLOSE_OPTIONS)}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);
