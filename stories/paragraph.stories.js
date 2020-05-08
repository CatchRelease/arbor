import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './paragraph.md';
import { Paragraph } from '../src';

storiesOf('Paragraph', module).add(
  'default',
  () => (
    <>
      <Paragraph variant="ui">Paragraph (UI)</Paragraph>
      <Paragraph variant="longForm">Paragraph (Long Form)</Paragraph>
      <Paragraph variant="tiny">Paragraph (Tiny)</Paragraph>
    </>
  ),
  { notes: { markdown: notes } }
);
