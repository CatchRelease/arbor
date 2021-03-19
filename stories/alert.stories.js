import { select, text } from '@storybook/addon-knobs';

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

export default {
  title: 'Alerts'
};

export const Banner = () => (
  <Box as="section" p="regular">
    <Heading.H1>Banner Alert</Heading.H1>

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
);

Banner.story = {
  parameters: { notes: { markdown: notes } }
};

export const Card = () => (
  <Box as="section" p="regular">
    <Heading.H1>Card Alert</Heading.H1>

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
);

Card.story = {
  parameters: { notes: { markdown: notes } }
};

export const Inline = () => (
  <Box as="section" p="regular">
    <Heading.H1>Box Alert</Heading.H1>

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
);

Inline.story = {
  parameters: { notes: { markdown: notes } }
};

export const Pane = () => (
  <Box as="section" p="regular">
    <Heading.H1>Pane Alert</Heading.H1>

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
);

Pane.story = {
  parameters: { notes: { markdown: notes } }
};

export const Toast = () => (
  <Box as="section" p="regular">
    <Heading.H1>Toast Alert</Heading.H1>

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
);

Toast.story = {
  parameters: { notes: { markdown: notes } }
};
