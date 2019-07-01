import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import { Avatar, Flex } from '../src';

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Flex justifyContent="space-around" width="200px" mt="100px">
    <Avatar
      name={text('Avatar 1', 'Alfred Pennyworth')}
      subtle={boolean('subtle', false)}
    />

    <Avatar
      name={text('Avatar 2', 'Batman')}
      subtle={boolean('subtle', false)}
    />

    <Avatar
      name={text('Avatar 3', 'Bruce Wayne')}
      subtle={boolean('subtle', false)}
    />

    <Avatar
      name={text('Avatar 4', 'Dick Grayson')}
      subtle={boolean('subtle', false)}
    />
  </Flex>
));
