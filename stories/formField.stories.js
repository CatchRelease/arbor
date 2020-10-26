/** @jsx jsx */

import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import notes from './input.md';
import { Box, Dropdown, FormField, Icon } from '../src';

const menuItems = [
  {
    label: 'Foo',
    value: 'foo'
  },
  {
    label: 'Bar',
    value: 'bar'
  },
  {
    label: 'Baz',
    value: 'baz'
  }
];

const icon = <Icon name="chevron" />;

const labelAside = (
  <Dropdown
    iconEnd={icon}
    type="button"
    menuItems={menuItems}
    name="clearance_state"
    variant="minimal"
    size="small"
  >
    Select one
  </Dropdown>
);

storiesOf('FormField', module).add(
  'default',
  () => (
    <Box maxWidth="300px">
      <FormField
        id="form-field"
        caption="My Caption"
        label="Example Label"
        labelAside={labelAside}
      >
        <Box>anything can go in the wrapper</Box>
      </FormField>
    </Box>
  ),
  { notes: { markdown: notes } }
);
