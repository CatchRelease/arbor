import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { Paragraph } from '../src';

storiesOf('Paragraphs', module).add('default', () => (
  <Fragment>
    <Paragraph.UI>Paragraph (UI)</Paragraph.UI>
    <Paragraph.LongForm>Paragraph (Long Form)</Paragraph.LongForm>
    <Paragraph.Tiny>Paragraph (Tiny)</Paragraph.Tiny>
  </Fragment>
));
