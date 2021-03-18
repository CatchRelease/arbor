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

const validateIs42 = (value) => (value === '42' ? null : 'Value must be 42');

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
        label="Number Field"
        id="number-field"
        type="number"
        placeholder="12345"
        name="number"
      />
      <Input
        label="Number Field w/ Hidden Browser Arrows"
        id="number-field-hidden-arrows"
        type="number"
        placeholder="12345"
        name="number"
        hideArrows="true"
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
      <Input
        label="Input with Validation"
        id="validation-input"
        name="validation-input"
        validate={validateIs42}
      />
      <Input
        label="Input with Validation and Caption"
        caption="This is just a caption"
        id="validation-input-with-caption"
        name="validation-input-with-caption"
        validate={validateIs42}
      />
      <Input
        label="Input with non-string value prop (should not throw a prop-type warning)"
        id="input-with-non-string-value"
        name="input-with-non-string-value"
        value={42}
        validate={validateIs42}
      />
    </form>
  ),
  { notes: { markdown: notes } }
);
