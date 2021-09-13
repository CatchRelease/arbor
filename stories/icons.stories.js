import notes from './icons.md';
import { Box, Grid, Icon, Text } from '../src';

const AVAILABLE_ICONS = [
  'annotation',
  'arrow-right',
  'ban',
  'bars',
  'bell',
  'calendar',
  'caret',
  'chat-bubble-outline',
  'check-circle-fas',
  'checkbox-checked',
  'checkbox-indeterminate',
  'checkmark-in-circle',
  'chevron',
  'chevron-left',
  'chevron-right',
  'cr-logo',
  'chrome',
  'clock',
  'cog',
  'comment-dots',
  'comment-dots-fas',
  'copy',
  'cross',
  'download',
  'envelope',
  'error',
  'exchange-alt',
  'eye',
  'eye-slash',
  'eye-slash-far',
  'external-link-alt',
  'external-link-square-alt',
  'flag',
  'facebook',
  'file-contract',
  'file-download',
  'filter',
  'fish',
  'globe',
  'google',
  'info-circle',
  'info-sign',
  'instagram',
  'link',
  'linkedin',
  'list',
  'lock',
  'minus',
  'minus-circle',
  'pen',
  'phone',
  'plus',
  'plus-circle',
  'print',
  'search-plus',
  'search-solid',
  'server',
  'share',
  'spinner',
  'star',
  'sticky-note',
  'swap',
  'symbol-circle',
  'tag',
  'text-height',
  'text-width',
  'th',
  'th-large',
  'thumb-down-outline',
  'thumb-up-outline',
  'tick-circle',
  'tiktok',
  'trash',
  'twitter',
  'upload',
  'user-friends',
  'video',
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
