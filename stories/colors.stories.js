import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { readableColor } from 'polished';

import notes from './colors.md';
import { colors, Flex, Heading, Grid, Text as TextComponent } from '../src';

const getReadableColor = (color, hex, modifier, colorGroup) => {
  switch (modifier) {
    case 'lighter':
      return `${colorGroup}.${color}.dark`;
    case 'light':
      return `${colorGroup}.${color}.darker`;
    case 'dark':
      return `${colorGroup}.${color}.lighter`;
    case 'darker':
      return `${colorGroup}.${color}.light`;
    case 'monochrome':
    default:
      return readableColor(hex, 'monochrome.black', 'monochrome.white', false);
  }
};

const getFrUnits = (obj) =>
  Object.entries(obj)
    .map(() => '1fr')
    .join(' ');

const Swatch = ({ color, hex, modifier, colorGroup }) => (
  <Flex
    bg={hex}
    flexDirection="column"
    height="100px"
    justifyContent="space-around"
    key={modifier}
    px="small"
  >
    <TextComponent color={getReadableColor(color, hex, modifier, colorGroup)}>
      {capitalize(modifier)}
    </TextComponent>
    <Heading.H3
      as="h2"
      color={getReadableColor(color, hex, modifier, colorGroup)}
    >
      {hex.toUpperCase()}
    </Heading.H3>
  </Flex>
);

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  colorGroup: PropTypes.string
};

Swatch.defaultProps = {
  modifier: '',
  colorGroup: ''
};

const SwatchCollection = ({
  color,
  collection,
  colorGroup,
  modifierOverride
}) => (
  <section>
    <Heading.H1>{capitalize(color)}</Heading.H1>
    <Grid gridTemplateRows={getFrUnits(collection)} key={color}>
      {Object.entries(collection).map(([modifier, hex]) => (
        <Swatch
          key={modifier}
          {...{
            color,
            hex,
            modifier:
              modifierOverride === undefined ? modifier : modifierOverride,
            colorGroup
          }}
        />
      ))}
    </Grid>
  </section>
);

SwatchCollection.propTypes = {
  color: PropTypes.string.isRequired,
  collection: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  colorGroup: PropTypes.string,
  modifierOverride: PropTypes.string
};

SwatchCollection.defaultProps = {
  colorGroup: '',
  modifierOverride: undefined
};

const Swatches = ({ colorGroup, modifierOverride, palette }) => (
  <Grid gridGap="small" gridTemplateColumns={getFrUnits(palette)}>
    {Object.entries(palette).map(([color, collection]) => (
      <SwatchCollection
        key={color}
        color={color}
        collection={
          typeof collection === 'string' ? { [color]: collection } : collection
        }
        colorGroup={colorGroup}
        modifierOverride={modifierOverride}
      />
    ))}
  </Grid>
);

Swatches.propTypes = {
  colorGroup: PropTypes.string,
  palette: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  modifierOverride: PropTypes.string
};

Swatches.defaultProps = {
  colorGroup: '',
  modifierOverride: undefined
};

export default {
  title: 'Colors'
};

export const Background = () => (
  <Swatches
    colorGroup="background"
    palette={colors.background}
    modifierOverride="monochrome"
  />
);

Background.parameters = { notes: { markdown: notes } };

export const Border = () => (
  <Swatches
    colorGroup="border"
    palette={colors.border}
    modifierOverride="monochrome"
  />
);

Border.parameters = { notes: { markdown: notes } };

export const Icon = () => (
  <Swatches
    colorGroup="icon"
    palette={colors.icon}
    modifierOverride="monochrome"
  />
);

Icon.parameters = { notes: { markdown: notes } };

export const Intent = () => (
  <Swatches colorGroup="intent" palette={colors.intent} />
);

Intent.parameters = { notes: { markdown: notes } };

export const Monochrome = () => {
  const { black, white, ...greys } = colors.monochrome;

  return <Swatches palette={{ black, grey: greys, white }} />;
};

Monochrome.parameters = { notes: { markdown: notes } };

export const Palette = () => (
  <Swatches colorGroup="palette" palette={colors.palette} />
);

Palette.parameters = { notes: { markdown: notes } };

export const Primary = () => <Swatches palette={colors.primary} />;

Primary.parameters = { notes: { markdown: notes } };

export const Secondary = () => <Swatches palette={colors.secondary} />;

Secondary.parameters = { notes: { markdown: notes } };

export const Text = () => (
  <Swatches
    colorGroup="text"
    palette={colors.text}
    modifierOverride="monochrome"
  />
);

Text.parameters = { notes: { markdown: notes } };
