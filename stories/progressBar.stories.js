import { number, select, boolean } from '@storybook/addon-knobs';
import notes from './progressBar.md';
import { Box, ProgressBar } from '../src';

const AVAILABLE_ICONS = {
  '<disabled>': null,
  annotation: 'annotation',
  calendar: 'calendar',
  'checkmark-in-circle': 'checkmark-in-circle',
  error: 'error'
};

export default {
  title: 'ProgressBar'
};

export const Default = () => (
  <Box m="regular" id="skip" maxWidth="750px">
    <ProgressBar percentage={96} />
    <ProgressBar percentage={66.67} iconEndName="lock" />
    <ProgressBar mt="large" width="50%" percentage={25} showPercentage />
    <ProgressBar
      mt="large"
      percentage={number('percentage', 33)}
      showPercentage={boolean('showPercentage', false)}
      iconEndName={select('iconEndName', AVAILABLE_ICONS, null)}
    />
  </Box>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
