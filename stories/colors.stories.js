import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'react-emotion';

import { spacings, blues, greys, whites, reds, greens, black } from '../src/theme';
import Heading from '../src/Heading';

const SwatchRow = styled.div`
  padding: ${spacings.small};
`;

const Swatches = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Swatch = styled.div`
  align-items: center;
  display: flex;
  height: 144px;
  justify-content: center;
  margin: ${spacings.larger} ${spacings.larger} 0 0;
  width: 176px;
  color: ${whites.white};
`;

const SwatchCollection = ({ title, colors }) => (
  <SwatchRow>
    <Heading.h1>{title}</Heading.h1>
    <Swatches>
      {Object.entries(colors).map(([name, hex]) => (
        <Swatch key={name} style={{ backgroundColor: hex }}>
          <Heading.h3>{name}</Heading.h3>
        </Swatch>
      ))}
    </Swatches>
  </SwatchRow>
);

storiesOf('Colors', module).add('default', () => (
  <Fragment>
    <SwatchCollection title="Whites" colors={whites} />
    <SwatchCollection title="Greys" colors={greys} />
    <SwatchCollection title="Blues" colors={blues} />
    <SwatchCollection title="Reds" colors={reds} />
    <SwatchCollection title="Greens" colors={greens} />
  </Fragment>
));
