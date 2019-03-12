import React from 'react';
import { storiesOf } from '@storybook/react';

import { Select } from '../src';

const options = (
  <>
    <option value="hellYes">Hell Yes</option>
    <option value="yes">Yes</option>
    <option value="maybe">maybe</option>
    <option value="no">No</option>
    <option value="hellNo">Hell No</option>
  </>
);

storiesOf('Select', module).add('default', () => (
  <form>
    <Select
      caption="My select caption"
      defaultValue="yes"
      id="example-select"
      label="Example Select"
      name="exmaple-select"
      placeholder="More text than a standard input"
    >
      {options}
    </Select>
    <Select
      defaultValue="yes"
      disabled
      id="disabled-select"
      label="Disabled Select"
      name="disabled-select"
    >
      {options}
    </Select>
    <Select
      caption="This is a large select"
      defaultValue="yes"
      id="large-select"
      label="Large Select"
      large
      name="large-select"
      placeholder="Placeholder"
    >
      {options}
    </Select>
  </form>
));
