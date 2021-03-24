import random from 'lodash/random';
import shuffle from 'lodash/shuffle';
import { readableColor } from 'polished';

import notes from './masonry.md';
import { colors, Box, Flex, Masonry, Text } from '../src';

const boxColors = shuffle([
  ...Object.values(colors.monochrome),
  ...Object.values(colors.primary),
  ...Object.values(colors.secondary)
]);

export default {
  title: 'Masonry'
};

export const Default = (args) => (
  <Box height="100%" p="regular" width="100%">
    <Masonry {...args}>
      {boxColors.map((color, key) => (
        <Flex
          alignItems="center"
          bg={color}
          height={random(100, 500)}
          justifyContent="center"
          key={key} // eslint-disable-line react/no-array-index-key
        >
          <Text color={readableColor(color)} fontSize="size8">
            Masonry Item
          </Text>
        </Flex>
      ))}
    </Masonry>
  </Box>
);

Default.args = {
  columnCount: '5',
  columnGap: 'regular',
  columnRuleColor: '',
  columnRuleStyle: '',
  columnRuleWidth: '',
  columnWidth: '300px',
  rowGap: 'regular'
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
