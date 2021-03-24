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

const ON_CLOSE_OPTIONS = [null, () => alert('Close Me!')]; // eslint-disable-line no-alert, no-undef

export default {
  title: 'Alerts',
  argTypes: {
    intent: {
      name: 'intent',
      control: {
        type: 'select',
        options: INTENTS
      }
    },
    onClose: {
      name: 'onClose',
      control: {
        type: 'select',
        options: ON_CLOSE_OPTIONS
      }
    }
  }
};

export const Banner = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Banner Alert</Heading.H1>

    <BannerAlert {...args} />
  </Box>
);

Banner.args = {
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  intent: INTENTS[0],
  message: 'Hooray!'
};
Banner.parameters = { notes: { markdown: notes } };

export const Card = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Card Alert</Heading.H1>

    <CardAlert {...args} />
  </Box>
);

Card.args = {
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  intent: INTENTS[0],
  message: 'Hooray! You did it. Your Source is now sending data.'
};
Card.parameters = { notes: { markdown: notes } };

export const Inline = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Box Alert</Heading.H1>

    <InlineAlert {...args} />
  </Box>
);

Inline.args = {
  details: '',
  intent: INTENTS[0],
  message: 'Hooray! You did it. Your Source is now sending data.'
};
Inline.parameters = { notes: { markdown: notes } };

export const Pane = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Pane Alert</Heading.H1>

    <PaneAlert {...args} />
  </Box>
);

Pane.args = {
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  intent: INTENTS[0],
  message: 'Hooray! You did it. Your Source is now sending data.'
};
Pane.parameters = { notes: { markdown: notes } };

export const Toast = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Toast Alert</Heading.H1>

    <ToastAlert {...args} />
  </Box>
);

Toast.args = {
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  intent: INTENTS[0],
  message: 'Hooray! You did it. Your Source is now sending data.'
};
Toast.parameters = { notes: { markdown: notes } };
