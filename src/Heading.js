import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Text from './Text';

const lineHeightMultiplier = 0.5;

const baseStyles = ({ theme }) => css`
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

Heading.defaultProps = {
  color: 'text.dark',
  fontWeight: 'bold'
};

Heading.h1 = Heading.withComponent('h1');

Heading.h1.defaultProps = {
  fontSize: 'size7',
  ...Heading.defaultProps
};

Heading.h2 = Heading.withComponent('h2');

Heading.h2.defaultProps = {
  fontSize: 'size6',
  ...Heading.defaultProps
};

Heading.h3 = Heading.withComponent('h3');

Heading.h3.defaultProps = {
  fontSize: 'size5',
  ...Heading.defaultProps
};

Heading.h4 = Heading.withComponent('h4');

Heading.h4.defaultProps = {
  fontSize: 'size4',
  ...Heading.defaultProps
};

Heading.h5 = styled(Heading.withComponent('h5'))`
  line-height: ${props => props.theme.lineHeights.large};
`;

Heading.h5.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'medium'
};

Heading.h6 = styled(Heading.withComponent('h6'))`
  line-height: ${props => props.theme.lineHeights.large};
`;

Heading.h6.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'regular'
};

export default Heading;
