import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Box, Grid, Icon, Text } from '../src';

const AVAILABLE_ICONS = [
  'annotation',
  'calendar',
  'caret',
  'chat-bubble-outline',
  'checkmark-in-circle',
  'chevron',
  'cr-logo',
  'cross',
  'download',
  'error',
  'info-sign',
  'swap',
  'symbol-circle',
  'tick-circle',
  'thumb-down-outline',
  'thumb-up-outline',
  'trash',
  'warning-sign'
];

const rotationOptions = {
  None: null,
  '90': '90',
  '180': '180',
  '270': '270'
};

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Grid
    gridTemplateColumns={`repeat(${AVAILABLE_ICONS.length}, 1fr)`}
    gridGap="large"
    justifyItems="center"
    alignItems="center"
    width="100vw"
    height="100vh"
  >
    {AVAILABLE_ICONS.map(icon => (
      <Box key={icon} textAlign="center">
        <Icon
          name={icon}
          color="grey100"
          fontSize="38px"
          rotation={select('Rotation', rotationOptions, null)}
        />
        <Text variant="tiny">{icon}</Text>
      </Box>
    ))}
  </Grid>
));
