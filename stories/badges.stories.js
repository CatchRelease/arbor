import { boolean, select } from '@storybook/addon-knobs';

import notes from './badges.md';
import { Badge, Box, colors, Flex, Heading, Icon } from '../src';

const badgeColors = Object.keys(colors.palette);
const variantOptions = ['default', 'pill'];
const iconEnd = <Icon name="cross" />;
const iconStart = <Icon name="cr-logo" />;

export default {
  title: 'Badges'
};

export const Default = () => (
  <Box as="section" p="regular">
    <Heading.H1>Badges</Heading.H1>
    <Flex>
      <Badge
        mr="regular"
        subtle={boolean('Subtle', false)}
        variant={select('Variant', variantOptions)}
      >
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge
          paletteColor={color}
          key={color}
          mr="regular"
          subtle={boolean('Subtle', false)}
          variant={select('Variant', variantOptions)}
        >
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

Default.story = {
  parameters: { notes: { markdown: notes } }
};

export const IconEnd = () => (
  <Box as="section" p="regular">
    <Heading.H1>Badges with ending icon</Heading.H1>
    <Flex>
      <Badge
        mr="regular"
        iconEnd={iconEnd}
        subtle={boolean('Subtle', false)}
        variant={select('Variant', variantOptions)}
      >
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge
          paletteColor={color}
          key={color}
          mr="regular"
          iconEnd={iconEnd}
          subtle={boolean('Subtle', false)}
          variant={select('Variant', variantOptions)}
        >
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

IconEnd.story = {
  parameters: { notes: { markdown: notes } }
};

export const IconStart = () => (
  <Box as="section" p="regular">
    <Heading.H1>Badges with staring icon</Heading.H1>
    <Flex>
      <Badge
        mr="regular"
        iconStart={iconStart}
        subtle={boolean('Subtle', false)}
        variant={select('Variant', variantOptions)}
      >
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge
          paletteColor={color}
          key={color}
          mr="regular"
          iconStart={iconStart}
          subtle={boolean('Subtle', false)}
          variant={select('Variant', variantOptions)}
        >
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

IconStart.story = {
  parameters: { notes: { markdown: notes } }
};

export const IconStartIconEnd = () => (
  <Box as="section" p="regular">
    <Heading.H1>Badges with starting and ending icons</Heading.H1>
    <Flex>
      <Badge
        mr="regular"
        iconEnd={iconEnd}
        iconStart={iconStart}
        subtle={boolean('Subtle', false)}
        variant={select('Variant', variantOptions)}
      >
        NEUTRAL
      </Badge>
      {badgeColors.map((color) => (
        <Badge
          paletteColor={color}
          key={color}
          mr="regular"
          iconEnd={iconEnd}
          iconStart={iconStart}
          subtle={boolean('Subtle', false)}
          variant={select('Variant', variantOptions)}
        >
          {color.toUpperCase()}
        </Badge>
      ))}
    </Flex>
  </Box>
);

IconStartIconEnd.story = {
  name: 'Icon Start & Icon End',
  parameters: { notes: { markdown: notes } }
};
