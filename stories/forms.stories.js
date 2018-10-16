import React from 'react';
import { css } from 'react-emotion';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

storiesOf('Forms', module).add('default', () => (
  <form className={css({ width: '352px' })}>
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
      id="large-input"
      type="text"
      caption="This is a large field"
      name="large"
      placeholder="Placeholder"
    />
  </form>
));
