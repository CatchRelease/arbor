import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { Box, Heading, MenuItem, Text } from '../src';

const stories = storiesOf('MenuItem', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Box as="section" p="regular">
    <Heading.h1 mb="regular">Menu Item</Heading.h1>
    <MenuItem
      isDisabled={boolean('isDisabled', false)}
      isFocused={boolean('isFocused', false)}
      isSelected={boolean('isSelected', false)}
    >
      <Text color="inherit">I am a Menu Item in a Text Component!</Text>
    </MenuItem>
  </Box>
));
