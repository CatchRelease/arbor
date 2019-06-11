/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import { Input, Label, Textarea } from '../src';

const secondaryLabel = id => (
  <Label
    htmlFor={id}
    css={css`
      white-space: nowrap;
    `}
  >
    A secondary plain old label
  </Label>
);

storiesOf('Input', module).add('default', () => (
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
      id="large-input"
      type="text"
      caption="This is a large field"
      name="large"
      placeholder="Placeholder"
    />
    <Input
      label="Input with Secondary Label"
      secondaryLabel={secondaryLabel('secondary-text-input')}
      id="secondary-text-input"
      placeholder="Yey"
      name="secondary-text-input"
    />
  </form>
));
