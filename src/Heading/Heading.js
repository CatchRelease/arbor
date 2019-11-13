import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Text from '../Text';

const lineHeightMultiplier = 0.5;

const baseStyles = ({ theme }) => css`
  line-height: ${theme.lineHeights.small};
`;

const calculatedMargin = ({ mb, fontSize, theme }) =>
  !mb &&
  css`
    margin-bottom: calc(${theme.fontSizes[fontSize]} * ${lineHeightMultiplier});
  `;

const Heading = styled(Text)`
  ${baseStyles};
  ${calculatedMargin};
`;

Heading.defaultProps = {
  as: 'h1',
  color: 'text.dark',
  fontWeight: 'bold',
  lineheight: 'small'
};

const createHeading = h => (
  { children, ...props } // eslint-disable-line react/prop-types
) => (
  <Heading as={h} {...props}>
    {children}
  </Heading>
);

Heading.h1 = createHeading('h1');
Heading.h1.defaultProps = {
  fontSize: 'size7'
};

Heading.h2 = createHeading('h2');
Heading.h2.defaultProps = {
  fontSize: 'size6'
};

Heading.h3 = createHeading('h3');
Heading.h3.defaultProps = {
  fontSize: 'size5'
};

Heading.h4 = createHeading('h4');
Heading.h4.defaultProps = {
  fontSize: 'size4'
};

Heading.h5 = styled(createHeading('h5'))`
  line-height: ${props => props.theme.lineHeights.large};
`;
Heading.h5.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'medium'
};

Heading.h6 = styled(createHeading('h6'))`
  line-height: ${props => props.theme.lineHeights.large};
`;
Heading.h6.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'regular'
};

export default Heading;
