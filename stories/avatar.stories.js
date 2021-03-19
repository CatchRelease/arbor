import { boolean, select, text } from '@storybook/addon-knobs';

import notes from './avatar.md';
import { Avatar, Flex, theme } from '../src';

const sizes = Object.keys(theme.avatarSizes);

export default {
  title: 'Avatar'
};

export const Default = () => (
  <Flex justifyContent="space-around" mt="100px">
    <Avatar
      name={text('Avatar 1', 'Aruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 2', 'Bruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 3', 'Cruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 4', 'Druce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 5', 'Eruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 6', 'Fruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 7', 'Gruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 8', 'Hruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 9', 'Iruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
    <Avatar
      name={text('Avatar 10', '+42')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
    />
  </Flex>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};

export const CustomColor = () => (
  <Flex justifyContent="space-around" mt="100px">
    <Avatar
      name={text('Avatar 1', 'Aruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
      baseColor="monochrome.grey80"
    />
    <Avatar
      name={text('Avatar 2', 'Aruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
      baseColor="monochrome.grey40"
    />
    <Avatar
      name={text('Avatar 3', 'Aruce Wayne')}
      subtle={boolean('subtle', false)}
      size={select('Size', sizes, 'default')}
      baseColor="blue"
    />
  </Flex>
);

CustomColor.story = {
  name: 'custom color',
  parameters: { notes: { markdown: notes } }
};
