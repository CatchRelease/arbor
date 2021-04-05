import notes from './avatar.md';
import { Avatar, Flex, theme } from '../src';

const sizes = Object.keys(theme.avatarSizes);

export default {
  title: 'Avatar',
  argTypes: {
    size: {
      options: sizes,
      control: {
        type: 'select'
      }
    }
  }
};

export const Default = (args) => {
  const {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    ...rest
  } = args;

  return (
    <Flex justifyContent="space-around" mt="100px">
      <Avatar name={avatar1} {...rest} />
      <Avatar name={avatar2} {...rest} />
      <Avatar name={avatar3} {...rest} />
      <Avatar name={avatar4} {...rest} />
      <Avatar name={avatar5} {...rest} />
      <Avatar name={avatar6} {...rest} />
      <Avatar name={avatar7} {...rest} />
      <Avatar name={avatar8} {...rest} />
      <Avatar name={avatar9} {...rest} />
      <Avatar name={avatar10} {...rest} />
    </Flex>
  );
};

Default.args = {
  avatar1: 'Aruce Wayne',
  avatar2: 'Bruce Wayne',
  avatar3: 'Cruce Wayne',
  avatar4: 'Druce Wayne',
  avatar5: 'Eruce Wayne',
  avatar6: 'Fruce Wayne',
  avatar7: 'Gruce Wayne',
  avatar8: 'Hruce Wayne',
  avatar9: 'Iruce Wayne',
  avatar10: '+42',
  size: 'default',
  subtle: false
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };

export const CustomColor = (args) => {
  const { avatar1, avatar2, avatar3, ...rest } = args;

  return (
    <Flex justifyContent="space-around" mt="100px">
      <Avatar name={avatar1} {...rest} baseColor="monochrome.grey80" />
      <Avatar name={avatar2} {...rest} baseColor="monochrome.grey40" />
      <Avatar name={avatar3} {...rest} baseColor="blue" />
    </Flex>
  );
};

CustomColor.args = {
  avatar1: 'Aruce Wayne',
  avatar2: 'Aruce Wayne',
  avatar3: 'Aruce Wayne',
  size: 'default',
  subtle: false
};
CustomColor.storyName = 'custom color';
CustomColor.parameters = { notes: { markdown: notes } };
