import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'react-emotion';

import { Heading, colors, fontSizes, borderRadius, spacings, blues, greys, whites, reds, greens, black } from '../src';

const blackAndWhites = { ...whites, black };

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
  border-radius: ${borderRadius.large};
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
`;

const SwatchTitle = styled(Heading.h4)`
  font-size: ${fontSizes.size2};
  color: ${colors.grey70};
  margin-top: ${spacings.regular};
`;

const SwatchCollection = ({ title, colors }) => (
  <SwatchRow>
    <Heading.h1>{title}</Heading.h1>
    <Swatches>
      {Object.entries(colors).map(([name, hex]) => (
        <div>
          <Swatch key={name} style={{ backgroundColor: hex }}>
            <Heading.h3>{hex}</Heading.h3>
          </Swatch>

          <SwatchTitle>{name}</SwatchTitle>
        </div>
      ))}
    </Swatches>
  </SwatchRow>
);

storiesOf('Colors', module).add('default', () => (
  <Fragment>
    <SwatchCollection title="Black and Whites" colors={blackAndWhites} />
    <SwatchCollection title="Greys" colors={greys} />
    <SwatchCollection title="Blues" colors={blues} />
    <SwatchCollection title="Reds" colors={reds} />
    <SwatchCollection title="Greens" colors={greens} />
  </Fragment>
));
