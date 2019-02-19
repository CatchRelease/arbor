import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Box, Grid, Icon, Text } from '../src';

const AVAILABLE_ICONS = [
  'calendar',
  'caret',
  'chat-bubble-outline',
  'checkbox-marked-circle-outline',
  'cr-logo',
  'download',
  'status',
  'swap',
  'thumb-down-outline',
  'thumb-up-outline',
  'trash'
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
