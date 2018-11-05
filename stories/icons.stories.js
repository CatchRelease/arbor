import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grid, Icon, Text } from '../src';

const AVAILABLE_ICONS = [
  'checkbox-marked-circle-outline',
  'cr-logo',
  'download',
  'chat-bubble-outline',
  'thumb-up-outline',
  'thumb-down-outline'
];

storiesOf('Icons', module).add('default', () => (
  <Grid
    gridTemplateColumns={`repeat(${AVAILABLE_ICONS.length}, 1fr)`}
    gridGap="large"
    justifyItems="center"
    alignItems="center"
    width="100vw"
    height="100vh"
  >
    {AVAILABLE_ICONS.map(icon => (
      <Box textAlign="center">
        <Icon name={icon} color="grey100" fontSize="38px" />
        <Text variant="tiny">{icon}</Text>
      </Box>
    ))}
  </Grid>
));
