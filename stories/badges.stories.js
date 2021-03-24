import notes from './badges.md';
import { Badge, Box, colors, Flex, Heading, Icon } from '../src';

const badgeColors = Object.keys(colors.palette);
const variantOptions = ['default', 'pill'];
const iconEnd = <Icon name="cross" />;
const iconStart = <Icon name="cr-logo" />;

export default {
  title: 'Badges',
  argTypes: {
    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: variantOptions
      }
    }
  }
};

export const Default = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Badges</Heading.H1>
    <Flex>
      <Badge mr="regular" {...args}>
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge paletteColor={color} key={color} mr="regular" {...args}>
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

Default.args = { subtle: false };
Default.parameters = { notes: { markdown: notes } };

export const IconEnd = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Badges with ending icon</Heading.H1>
    <Flex>
      <Badge mr="regular" iconEnd={iconEnd} {...args}>
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge
          paletteColor={color}
          key={color}
          mr="regular"
          iconEnd={iconEnd}
          {...args}
        >
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

IconEnd.args = { subtle: false };
IconEnd.parameters = { notes: { markdown: notes } };

export const IconStart = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Badges with staring icon</Heading.H1>
    <Flex>
      <Badge mr="regular" iconStart={iconStart} {...args}>
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge
          paletteColor={color}
          key={color}
          mr="regular"
          iconStart={iconStart}
          {...args}
        >
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

IconStart.args = { subtle: false };
IconStart.parameters = { notes: { markdown: notes } };

export const IconStartIconEnd = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Badges with starting and ending icons</Heading.H1>
    <Flex>
      <Badge mr="regular" iconEnd={iconEnd} iconStart={iconStart} {...args}>
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge
          paletteColor={color}
          key={color}
          mr="regular"
          iconEnd={iconEnd}
          iconStart={iconStart}
          {...args}
        >
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

IconStartIconEnd.args = { subtle: false };
IconStartIconEnd.storyName = 'Icon Start & Icon End';
IconStartIconEnd.parameters = { notes: { markdown: notes } };
