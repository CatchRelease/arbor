import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Box, Checkbox } from '../src';

const stories = storiesOf('Checkbox', module);

stories.add('default', () => (
  <Box p="larger">
    <Checkbox label="Checkbox default" />
    <Checkbox checked label="Checkbox checked" />
    <Checkbox disabled label="Checkbox disabled" />
    <Checkbox disabled checked label="Checkbox checked disabled" />
    <Checkbox indeterminate label="Checkbox indeterminate" />
    <Checkbox checked indeterminate label="Checkbox checked indeterminate" />
    <Checkbox
      checked
      indeterminate
      disabled
      label="Checkbox checked indeterminate disabled"
    />

    <Box maxWidth="250px">
      <Checkbox label="This is a checkbox with a long label that wraps onto another line" />
    </Box>
  </Box>
));

stories.addDecorator(withKnobs);
stories.add('with icon', () => (
  <Box p="larger">
    <Checkbox icon={text('Icon name', 'download')} label="Checkbox default" />
    <Checkbox
      icon={text('Icon name', 'download')}
      checked
      label="Checkbox checked"
    />
    <Checkbox
      icon={text('Icon name', 'download')}
      disabled
      label="Checkbox disabled"
    />
    <Checkbox
      icon={text('Icon name', 'download')}
      disabled
      checked
      label="Checkbox checked disabled"
    />
    <Checkbox
      icon={text('Icon name', 'download')}
      indeterminate
      label="Checkbox indeterminate"
    />
    <Checkbox
      icon={text('Icon name', 'download')}
      checked
      indeterminate
      label="Checkbox checked indeterminate"
    />
    <Checkbox
      icon={text('Icon name', 'download')}
      checked
      indeterminate
      disabled
      label="Checkbox checked indeterminate disabled"
    />
  </Box>
));
