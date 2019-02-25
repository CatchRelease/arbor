import styled from '@emotion/styled';
import { css } from '@emotion/core';

import createWithComponent from '../utils/createWithComponent';
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

const Heading = styled(
  createWithComponent(Text, 'h1', {
    color: 'text.dark',
    fontWeight: 'bold'
  })
)`
  ${baseStyles};
  ${calculatedMargin};
`;

Heading.h1 = createWithComponent(Heading, 'h1', {
  fontSize: 'size7'
});

Heading.h2 = createWithComponent(Heading, 'h2', {
  fontSize: 'size6'
});

Heading.h3 = createWithComponent(Heading, 'h3', {
  fontSize: 'size5'
});

Heading.h4 = createWithComponent(Heading, 'h4', {
  fontSize: 'size4'
});

Heading.h5 = styled(
  createWithComponent(Heading, 'h5', {
    fontSize: 'size4',
    fontWeight: 'medium'
  })
)`
  line-height: ${props => props.theme.lineHeights.large};
`;

Heading.h6 = styled(
  createWithComponent(Heading, 'h6', {
    fontSize: 'size4',
    fontWeight: 'regular'
  })
)`
  line-height: ${props => props.theme.lineHeights.large};
`;

export default Heading;
