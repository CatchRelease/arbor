import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Text from './Text';

const lineHeightMultiplier = 0.5;

const baseStyles = ({ theme }) => css`
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.small};
`;

const calculatedMargin = ({ mb, fontSize, theme }) =>
  !mb &&
  css`
    margin-bottom: calc(${theme.fontSizes[fontSize]} * ${lineHeightMultiplier});
  `;

const Heading = styled(Text.withComponent('h1'))`
  ${baseStyles};
  ${calculatedMargin};
`;

Heading.h1 = Heading.withComponent('h1');

Heading.h1.defaultProps = {
  color: 'grey100',
  fontSize: 'size7'
};

Heading.h2 = Heading.withComponent('h2');

Heading.h2.defaultProps = {
  color: 'grey80',
  fontSize: 'size6'
};

Heading.h3 = Heading.withComponent('h3');

Heading.h3.defaultProps = {
  color: 'grey80',
  fontSize: 'size5'
};

Heading.h4 = Heading.withComponent('h4');

Heading.h4.defaultProps = {
  color: 'grey80',
  fontSize: 'size4'
};

Heading.h5 = styled(Heading.withComponent('h5'))`
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.large};
`;

Heading.h5.defaultProps = {
  color: 'grey100',
  fontSize: 'size2'
};

Heading.h6 = styled(Heading.withComponent('h6'))`
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.large};
`;

Heading.h6.defaultProps = {
  color: 'grey80',
  fontSize: 'size2'
};

export default Heading;
