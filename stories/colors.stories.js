import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'react-emotion';

import { blues, greys, whites, reds, greens, black } from '../src/theme';

const SwatchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Swatch = styled.div`
  align-items: center;
  display: flex;
  height: 144px;
  justify-content: center;
  margin: 10px;
  width: 176px;
  color: ${whites.white};
`;

const SwatchCollection = ({ title, colors }) => (
  <div>
    <h1>{title}</h1>
    <SwatchRow>
      {Object.entries(colors).map(([name, hex]) => (
        <Swatch key={name} style={{ backgroundColor: hex }}>
          <p>{name}</p>
        </Swatch>
      ))}
    </SwatchRow>
  </div>
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
