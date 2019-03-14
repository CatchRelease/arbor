import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { readableColor } from 'polished';

import {
  Heading,
  backgroundColors,
  black,
  blues,
  borderColors,
  brandColors,
  Box,
  bronzes,
  Flex,
  greens,
  greys,
  iconColors,
  reds,
  textColors,
  whites
} from '../src';

const blackAndWhites = { ...whites, black };

const getBrandedReadableColor = hex =>
  readableColor(hex) === '#000' ? 'black' : 'white';

const SwatchCollection = ({ title, pallete }) => (
  <Box p="small">
    <Heading.h1>{title}</Heading.h1>
    <Flex flexWrap="wrap">
      {Object.entries(pallete).map(([name, hex]) => (
        <div key={name}>
          <Flex
            height="144px"
            width="300px"
            mt="larger"
            mr="larger"
            key={name}
            bg={hex}
            borderRadius="large"
            alignItems="center"
            justifyContent="center"
            boxShadow="elevation3"
          >
            <Heading.h3 as="h2" color={getBrandedReadableColor(hex)}>
              {hex}
            </Heading.h3>
          </Flex>

          <Heading.h4 as="h3" fontSize="size2" color="grey70" mt="regular">
            {name}
          </Heading.h4>
        </div>
      ))}
    </Flex>
  </Box>
);

SwatchCollection.propTypes = {
  title: PropTypes.string.isRequired,
  pallete: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

storiesOf('Colors', module).add('default', () => (
  <Fragment>
    <SwatchCollection title="Black and Whites" pallete={blackAndWhites} />
    <SwatchCollection title="Greys" pallete={greys} />
    <SwatchCollection title="Blues" pallete={blues} />
    <SwatchCollection title="Reds" pallete={reds} />
    <SwatchCollection title="Greens" pallete={greens} />
    <SwatchCollection title="Bronzes" pallete={bronzes} />
    <SwatchCollection title="Background Colors" pallete={backgroundColors} />
    <SwatchCollection title="Border Colors" pallete={borderColors} />
    <SwatchCollection title="Text Colors" pallete={textColors} />
    <SwatchCollection title="Icon Colors" pallete={iconColors} />
    <SwatchCollection title="Brand Colors" pallete={brandColors} />
  </Fragment>
));
