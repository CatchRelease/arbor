import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '../src';

storiesOf('Text', module).add('default', () => (
  <Text>The quick brown fox jumps over the lazy dog</Text>
));
