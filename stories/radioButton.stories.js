import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './radioButton.md';
import { Box, RadioButton } from '../src';

const stories = storiesOf('RadioButton', module);

const onChange = e => {
  console.log('ch ch ch changed', e);
};

stories.add(
  'default',
  () => (
    <Box p="larger">
      <RadioButton id="default" name="default" label="RadioButton default" />
      <RadioButton
        id="checked"
        name="checked"
        checked
        label="RadioButton checked"
      />

      <RadioButton
        id="disabled"
        name="disabled"
        disabled
        label="RadioButton disabled"
      />
      <RadioButton
        id="checked-disabled"
        name="checked-disabled"
        disabled
        checked
        label="RadioButton checked disabled"
      />

      <RadioButton
        onChange={onChange}
        id="grouped-a"
        name="grouped"
        label="RadioButton grouped (a)"
      />
      <RadioButton
        onChange={onChange}
        id="grouped-b"
        name="grouped"
        label="RadioButton grouped (b)"
      />

      <Box maxWidth="250px">
        <RadioButton
          checked
          id="long-label"
          name="long-label"
          label="This is a radio button with a long label that wraps onto another line"
        />
      </Box>
    </Box>
  ),
  { notes: { markdown: notes } }
);
