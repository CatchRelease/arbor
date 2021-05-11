import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

const createHeading =
  (h) =>
  (
    { children, ...props } // eslint-disable-line react/prop-types
  ) =>
    (
      <Heading as={h} {...props}>
        {children}
      </Heading>
    );

Heading.H1 = createHeading('h1');
Heading.H1.defaultProps = {
  fontSize: 'size7'
};

Heading.H2 = createHeading('h2');
Heading.H2.defaultProps = {
  fontSize: 'size6'
};

Heading.H3 = createHeading('h3');
Heading.H3.defaultProps = {
  fontSize: 'size5'
};

Heading.H4 = createHeading('h4');
Heading.H4.defaultProps = {
  fontSize: 'size4'
};

Heading.H5 = styled(createHeading('h5'))`
  line-height: ${(props) => props.theme.lineHeights.large};
`;
Heading.H5.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'medium'
};

Heading.H6 = styled(createHeading('h6'))`
  line-height: ${(props) => props.theme.lineHeights.large};
`;
Heading.H6.defaultProps = {
  fontSize: 'size4',
  fontWeight: 'regular'
};

export default Heading;
