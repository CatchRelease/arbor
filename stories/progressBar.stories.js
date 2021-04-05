import notes from './progressBar.md';
import { Box, ProgressBar } from '../src';

export default {
  title: 'ProgressBar',
  argTypes: {
    iconEndName: {
      options: [null, 'annotation', 'calendar', 'checkmark-in-circle', 'error'],
      control: {
        type: 'select',
        labels: {
          null: '<disabled>'
        }
      }
    }
  }
};

export const Default = (args) => (
  <Box m="regular" id="skip" maxWidth="750px">
    <ProgressBar percentage={96} />
    <ProgressBar percentage={66.67} iconEndName="lock" />
    <ProgressBar mt="large" width="50%" percentage={25} showPercentage />
    <ProgressBar mt="large" {...args} />
  </Box>
);

Default.args = { percentage: 33, showPercentage: false, iconEndName: null };
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
