import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './text.md';
import { Text } from '../src';

storiesOf('Text', module).add(
  'default',
  () => <Text>The quick brown fox jumps over the lazy dog</Text>,
  { notes: { markdown: notes } }
);
