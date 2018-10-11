import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Heading } from '../src';

storiesOf('Buttons', module).add('default', () => (
  <div style={{ padding: '10px', width: '500px' }}>
    <Heading.h2>Call to Action</Heading.h2>

    <Heading.h3>Enabled</Heading.h3>
    <Button.CTA>Call to Action</Button.CTA>

    <Heading.h3>Disabled</Heading.h3>
    <Button.CTA disabled>Disabled</Button.CTA>
  </div>
));
