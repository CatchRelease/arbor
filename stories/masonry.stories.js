import React from 'react';
import random from 'lodash/random';
import shuffle from 'lodash/shuffle';
import { readableColor } from 'polished';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import {
  blues,
  greys,
  reds,
  greens,
  bronzes,
  Box,
  Flex,
  Masonry,
  Text
} from '../src';

const colors = shuffle(
  Object.values({
    ...blues,
    ...greys,
    ...reds,
    ...greens,
    ...bronzes
  })
);

const stories = storiesOf('Masonry', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Box height="100%" p="regular" width="100%">
    <Masonry
      columnCount={text('Column Count', '5')}
      columnGap={text('Column Gap', 'regular')}
      columnRuleColor={text('Column Rule Color', '')}
      columnRuleStyle={text('Column Rule Style', '')}
      columnRuleWidth={text('Column Rule Width', '')}
      columnWidth={text('Column Width', '300px')}
      rowGap={text('Row Gap', 'regular')}
    >
      {colors.map((color, key) => (
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
));
