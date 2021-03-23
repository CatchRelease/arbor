import { boolean } from '@storybook/addon-knobs';

import notes from './menuItem.md';
import { Box, Heading, MenuItem, Text } from '../src';

export default {
  title: 'MenuItem'
};

export const Default = () => (
  <Box as="section" p="regular">
    <Heading.H1 mb="regular">Menu Item</Heading.H1>
    <MenuItem
      isDisabled={boolean('isDisabled', false)}
      isFocused={boolean('isFocused', false)}
      isSelected={boolean('isSelected', false)}
    >
      <Text color="inherit">I am a Menu Item in a Text Component!</Text>
    </MenuItem>
  </Box>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
