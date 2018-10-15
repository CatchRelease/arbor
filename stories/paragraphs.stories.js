import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { Paragraph } from '../src';

storiesOf('Paragraphs', module).add('default', () => (
  <Fragment>
    <Paragraph variant="ui">Paragraph (UI)</Paragraph>
    <Paragraph variant="longForm">Paragraph (Long Form)</Paragraph>
    <Paragraph variant="tiny">Paragraph (Tiny)</Paragraph>
  </Fragment>
));
