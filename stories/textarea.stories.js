import { css } from '@emotion/react';

import notes from './textarea.md';
import { Dropdown, Label, Textarea } from '../src';

const secondaryLabel = (id) => (
  <Label
    htmlFor={id}
    css={css`
      white-space: nowrap;
    `}
  >
    A secondary plain old label
  </Label>
);

const menuItems = [
  {
    label: 'Airplane',
    value: 'airplane'
  },
  {
    label: 'Sweet mirror sunglasses',
    value: 'sunglasses'
  },
  {
    label: 'Drinks at the airport bar',
    value: 'booze'
  }
];

const secondaryDropdown = (
  <Dropdown
    menuItems={menuItems}
    name="pilot_stuff"
    variant="minimal"
    size="small"
    type="button"
  >
    Pilot Stuff
  </Dropdown>
);

export default {
  title: 'Textarea'
};

export const Default = () => (
  <form>
    <Textarea
      label="Example Textarea"
      caption="My textarea caption"
      id="example-textarea"
      placeholder="More text than a standard input"
      name="example-textarea"
    />
    <Textarea
      label="Disabled Textarea"
      id="disabled-textarea"
      disabled
      name="disabled-textarea"
    />
    <Textarea
      large
      label="Large Textarea"
      id="large-textarea"
      caption="This is a large textarea"
      name="large-textarea"
      placeholder="Placeholder"
    />
    <Textarea
      label="Textarea with Secondary Label"
      secondaryLabel={secondaryLabel('secondary-text-textarea')}
      id="secondary-text-textarea"
      placeholder="Wait 'til they get a load of me"
      name="secondary-text-textarea"
    />
    <Textarea
      label="Textarea with Secondary Dropdown"
      labelAside={secondaryDropdown}
      id="secondary-dropdown-textarea"
      placeholder="Don't look at me!"
      name="secondary-dropdown-textarea"
    />
  </form>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};
