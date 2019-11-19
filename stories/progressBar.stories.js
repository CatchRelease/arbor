import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './progressBar.md';
import { Box, ProgressBar } from '../src';

const stories = storiesOf('ProgressBar', module);

stories.add(
  'default',
  () => (
    <Box m="regular" id="skip" maxWidth="750px">
      <ProgressBar max="666" value="444" indicatorIconName="lock" />
      <ProgressBar
        mt="large"
        width="50%"
        max="100"
        value="25"
        showPercentage={true}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);
