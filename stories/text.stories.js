import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '../src';

storiesOf('Text', module).add('default', () => (
  <Fragment>
    <Text.p variant="ui">Paragraph (UI)</Text.p>
    <Text.p variant="longForm">Paragraph (Long Form)</Text.p>
    <Text.p variant="tiny">Paragraph (Tiny)</Text.p>
  </Fragment>
));
