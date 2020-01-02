import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, withKnobs } from '@storybook/addon-knobs';
import notes from './radioButtonGroup.md';
import { Box, Flex, RadioButtonGroup } from '../src';

const stories = storiesOf('RadioButtonGroup', module);
stories.addDecorator(withKnobs);

const onChange = value => {
  console.log('ch ch ch changed', value); // eslint-disable-line no-console
};

const groupOptions = [
  {
    label: 'RadioButton group (a)',
    value: 'a'
  },
  {
    label: 'RadioButton group (b)',
    value: 'b'
  },
  {
    label: 'RadioButton group (should be disabled) (c)',
    value: 'c',
    disabled: true
  },
  {
    label: 'RadioButton group (d)',
    value: 'd'
  }
];

stories.add(
  'default',
  () => (
    <Box p="larger">
      <RadioButtonGroup
        options={groupOptions}
        name="grouped"
        onChange={onChange}
        disabled={boolean('Disabled (Group level)', false)}
      />

      <Flex flexDirection="row">
        <RadioButtonGroup
          options={groupOptions}
          name="grouped-across"
          onChange={onChange}
          disabled={boolean('Disabled (Group level)', false)}
          buttonProps={{ mr: 'small' }}
        />
      </Flex>
    </Box>
  ),
  { notes: { markdown: notes } }
);
