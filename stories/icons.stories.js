import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';

import { Box, Icon, Text } from '../src';

const AVAILABLE_ICONS = [
  'checkbox-marked-circle-outline',
  'cr-logo',
  'download',
  'chat-bubble-outline',
  'thumb-up-outline',
  'thumb-down-outline'
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${AVAILABLE_ICONS.length}, 1fr);
  grid-column-gap: ${props => props.theme.space.large};
  grid-row-gap: ${props => props.theme.space.large};
  justify-items: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

storiesOf('Icons', module).add('default', () => (
  <Grid>
    {AVAILABLE_ICONS.map(icon => (
      <Box textAlign="center">
        <Icon name={icon} color="grey100" fontSize="38px" />
        <Text variant="tiny">{icon}</Text>
      </Box>
    ))}
  </Grid>
));
