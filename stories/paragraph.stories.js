import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { Paragraph } from '../src';

storiesOf('Paragraph', module).add('default', () => (
  <Fragment>
    <Paragraph.p variant="ui">Paragraph (UI)</Paragraph.p>
    <Paragraph.p variant="longForm">Paragraph (Long Form)</Paragraph.p>
    <Paragraph.p variant="tiny">Paragraph (Tiny)</Paragraph.p>
  </Fragment>
));
