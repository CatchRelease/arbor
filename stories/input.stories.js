/** @jsx jsx */

import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import notes from './input.md';
import { Dropdown, Icon, Input } from '../src';

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

storiesOf('Input', module).add(
  'default',
  () => (
    <form>
      <Input
        label="Example Label"
        caption="My Caption"
        id="example-field"
        type="email"
        placeholder="Email"
        name="email"
      />
      <Input
        label="Disabled"
        id="disabled-input"
        disabled
        type="text"
        name="disabled"
      />
      <Input
        large
        label="Large"
        labelAside="Label aside text"
        id="large-input"
        type="text"
        caption="This is a large field"
        name="large"
        placeholder="Placeholder"
      />
      <Input
        label="Input with Label Aside"
        labelAside={labelAside}
        id="secondary-text-input"
        placeholder="Yey"
        name="secondary-text-input"
      />
    </form>
  ),
  { notes: { markdown: notes } }
);
