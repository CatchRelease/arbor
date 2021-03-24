import notes from './menuItem.md';
import { Box, Heading, MenuItem, Text } from '../src';

export default {
  title: 'MenuItem'
};

export const Default = (args) => (
  <Box as="section" p="regular">
    <Heading.H1 mb="regular">Menu Item</Heading.H1>
    <MenuItem {...args}>
      <Text color="inherit">I am a Menu Item in a Text Component!</Text>
    </MenuItem>
  </Box>
);

Default.args = { isDisabled: false, isFocused: false, isSelected: false };
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
