import { storiesOf } from '@storybook/react';

import notes from './headings.md';
import { Heading } from '../src';

storiesOf('Headings', module).add(
  'default',
  () => (
    <>
      <Heading.H1>h1 Page Title</Heading.H1>
      <Heading.H2>h2 Large Section Header</Heading.H2>
      <Heading.H3>h3 Medium Section Header</Heading.H3>
      <Heading.H4>h4 Small Section Header</Heading.H4>
      <Heading.H5>h5 Caption - Strong</Heading.H5>
      <Heading.H6>h6 Caption - Light</Heading.H6>
    </>
  ),
  { notes: { markdown: notes } }
);
