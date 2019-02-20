import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import { Avatar, Flex } from '../src';

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Flex justifyContent="space-around" width="200px" mt="100px">
    <Avatar name={text('Avatar 1', 'Alfred Pennyworth')} />

    <Avatar name={text('Avatar 2', 'Batman')} />

    <Avatar name={text('Avatar 3', 'Bruce Wayne')} />

    <Avatar name={text('Avatar 4', 'Dick Grayson')} />
  </Flex>
));
