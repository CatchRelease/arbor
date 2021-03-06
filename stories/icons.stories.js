import notes from './icons.md';
import { Box, Grid, Icon, Text } from '../src';

const AVAILABLE_ICONS = [
  'annotation',
  'calendar',
  'caret',
  'chat-bubble-outline',
  'checkbox-checked',
  'checkbox-indeterminate',
  'checkmark-in-circle',
  'chevron',
  'cr-logo',
  'cross',
  'download',
  'error',
  'info-sign',
  'instagram',
  'linkedin',
  'lock',
  'swap',
  'symbol-circle',
  'thumb-down-outline',
  'thumb-up-outline',
  'tick-circle',
  'trash',
  'twitter',
  'vimeo',
  'warning-sign',
  'youtube'
];

export default {
  title: 'Icons',
  argTypes: {
    rotation: {
      options: [null, '90', '180', '270'],
      control: {
        type: 'select',
        labels: {
          null: 'None'
        }
      }
    }
  }
};

export const Default = (args) => (
  <Grid
    gridTemplateColumns={`repeat(${AVAILABLE_ICONS.length}, 1fr)`}
    gridGap="large"
    justifyItems="center"
    alignItems="center"
    width="100vw"
    height="100vh"
  >
    {AVAILABLE_ICONS.map((icon) => (
      <Box key={icon} textAlign="center">
        <Icon name={icon} color="grey100" fontSize="38px" {...args} />
        <Text variant="tiny">{icon}</Text>
      </Box>
    ))}
  </Grid>
);

Default.args = { rotation: null };
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
