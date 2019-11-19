import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './progressBar.md';
import { Box, ProgressBar } from '../src';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('ProgressBar', module);
stories.addDecorator(withKnobs);

const AVAILABLE_ICONS = {
  '<disabled>': null,
  annotation: 'annotation',
  calendar: 'calendar',
  'checkmark-in-circle': 'checkmark-in-circle',
  error: 'error'
};

stories.add(
  'default',
  () => (
    <Box m="regular" id="skip" maxWidth="750px">
      <ProgressBar percentage={96} />
      <ProgressBar percentage={66.67} iconEndName="lock" />
      <ProgressBar
        mt="large"
        width="50%"
        percentage={25}
        showPercentage={true}
      />
      <ProgressBar
        mt="large"
        percentage={number('percentage', 33)}
        showPercentage={boolean('showPercentage', false)}
        iconEndName={select('iconEndName', AVAILABLE_ICONS, null)}
      />
    </Box>
  ),
  { notes: { markdown: notes } }
);
