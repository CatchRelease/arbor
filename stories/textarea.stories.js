import React from 'react';
import { storiesOf } from '@storybook/react';

import { Textarea } from '../src';

storiesOf('Textarea', module).add('default', () => (
  <form>
    <Textarea
      label="Example Textarea"
      caption="My textarea caption"
      id="example-textarea"
      placeholder="More text than a standard input"
      name="exmaple-textarea"
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
  </form>
));
