import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { Avatar, Flex, theme } from '../src';

const sizes = Object.keys(theme.avatarSizes);

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Flex justifyContent="space-around" width="200px" mt="100px">
    <Avatar
      name={text('Avatar 1', 'Alfred Pennyworth')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 2', 'Batman')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 3', 'Bruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 4', 'Dick Grayson')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
  </Flex>
));
