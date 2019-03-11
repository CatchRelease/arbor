import React from 'react';
import { storiesOf } from '@storybook/react';

import { Select } from '../src';

const options = (
  <>
    <option value="hellYes">Hell Yes</option>
    <option selected value="yes">
      Yes
    </option>
    <option value="maybe">maybe</option>
    <option value="no">No</option>
    <option value="hellNo">Hell No</option>
  </>
);

storiesOf('Select', module).add('default', () => (
  <form>
    <Select
      label="Example Select"
      caption="My select caption"
      id="example-select"
      placeholder="More text than a standard input"
      name="exmaple-select"
    >
      {options}
    </Select>
    <Select
      label="Disabled Select"
      id="disabled-select"
      disabled
      name="disabled-select"
    >
      {options}
    </Select>
    <Select
      large
      label="Large Select"
      id="large-select"
      caption="This is a large select"
      name="large-select"
      placeholder="Placeholder"
    >
      {options}
    </Select>
  </form>
));
