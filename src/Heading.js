import styled, { css } from 'react-emotion';
import { color, textAlign } from 'styled-system';
import { brandFont, fontSizes, fontWeights, lineHeights } from './theme';

const lineHeightMultiplier = 0.5;

const calculatedHeadingStyles = size =>
  css({
    fontSize: size,
    marginBottom: `calc(${size} * ${lineHeightMultiplier})`
  });

const Heading = styled.h1`
  font-family: '${brandFont}';
  font-weight: ${fontWeights.bold};
  line-height: ${lineHeights.small};
  ${textAlign};
  ${color};
`;

Heading.propTypes = {
  ...textAlign.propTypes
};

Heading.h1 = styled(Heading.withComponent('h1'))`
  ${calculatedHeadingStyles(fontSizes.size7)};
`;

Heading.h1.defaultProps = {
  color: 'grey100'
};

Heading.h2 = styled(Heading.withComponent('h2'))`
  ${calculatedHeadingStyles(fontSizes.size6)};
`;

Heading.h2.defaultProps = {
  color: 'grey80'
};

Heading.h3 = styled(Heading.withComponent('h3'))`
  ${calculatedHeadingStyles(fontSizes.size5)};
`;

Heading.h3.defaultProps = {
  color: 'grey80'
};

Heading.h4 = styled(Heading.withComponent('h4'))`
  ${calculatedHeadingStyles(fontSizes.size4)};
`;

Heading.h4.defaultProps = {
  color: 'grey80'
};

Heading.h5 = styled(Heading.withComponent('h5'))`
  ${calculatedHeadingStyles(fontSizes.size2)};
  font-weight: ${fontWeights.medium};
  line-height: ${lineHeights.large};
`;

Heading.h5.defaultProps = {
  color: 'grey100'
};

Heading.h6 = styled(Heading.withComponent('h6'))`
  ${calculatedHeadingStyles(fontSizes.size2)};
  font-weight: ${fontWeights.regular};
  line-height: ${lineHeights.large};
`;

Heading.h6.defaultProps = {
  color: 'grey80'
};

export default Heading;
