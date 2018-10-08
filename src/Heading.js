import styled, { css } from 'react-emotion';
import {
  brandFont,
  fontSizes,
  fontWeights,
  lineHeights,
  colors
} from './theme';

const lineHeightMultiplier = 0.5;

const calculatedHeadingStyles = size =>
  css({
    fontSize: `${size}rem`,
    marginBottom: `calc(${size}rem * ${lineHeightMultiplier})`
  });

const Heading = styled.h1`
  font-family: '${brandFont}';
  font-weight: ${fontWeights.bold};
  line-height: ${lineHeights.small};
`;

Heading.h1 = styled(Heading.withComponent('h1'))`
  ${calculatedHeadingStyles(fontSizes.size7)};
  color: ${colors.grey100};
`;

Heading.h2 = styled(Heading.withComponent('h2'))`
  ${calculatedHeadingStyles(fontSizes.size6)};
  color: ${colors.grey80};
`;

Heading.h3 = styled(Heading.withComponent('h3'))`
  ${calculatedHeadingStyles(fontSizes.size5)};
  color: ${colors.grey80};
`;

Heading.h4 = styled(Heading.withComponent('h4'))`
  ${calculatedHeadingStyles(fontSizes.size4)};
  color: ${colors.grey80};
`;

Heading.h5 = styled(Heading.withComponent('h5'))`
  ${calculatedHeadingStyles(fontSizes.size2)};
  color: ${colors.grey100};
  font-weight: ${fontWeights.medium};
  line-height: ${lineHeights.large};
`;

Heading.h6 = styled(Heading.withComponent('h6'))`
  ${calculatedHeadingStyles(fontSizes.size2)};
  color: ${colors.grey80};
  font-weight: ${fontWeights.regular};
  line-height: ${lineHeights.large};
`;

export default Heading;
