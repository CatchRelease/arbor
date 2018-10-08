import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '../src/Heading';

storiesOf('Headings', module).add('default', () => (
  <Fragment>
    <Heading.h1>h1 Page Title</Heading.h1>
    <Heading.h2>h2 Large Section Header</Heading.h2>
    <Heading.h3>h3 Medium Section Header</Heading.h3>
    <Heading.h4>h4 Small Section Header</Heading.h4>
    <Heading.h5>h5 Caption - Strong</Heading.h5>
    <Heading.h6>h6 Caption - Light</Heading.h6>
  </Fragment>
));
