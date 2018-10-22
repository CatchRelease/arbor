import styled from 'react-emotion';
import { color, textAlign, space } from 'styled-system';

const marginBottomMultiplier = 0.5;

const calculatedMarginBottom = fontSize =>
  `calc(${fontSize} * ${marginBottomMultiplier})`;

const Heading = styled.h1`
  font-family: '${props => props.theme.brandFont}';
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.small};
  ${textAlign};
  ${color};
  ${space};
`;

Heading.propTypes = {
  ...textAlign.propTypes,
  ...space.propTypes
};

Heading.h1 = styled(Heading.withComponent('h1'))`
  font-size: ${props => props.theme.fontSizes.size7};
  margin-bottom: ${props =>
    props.mb
      ? props.theme.space[props.mb]
      : calculatedMarginBottom(props.theme.fontSizes.size7)};
`;

Heading.h1.defaultProps = {
  color: 'grey100'
};

Heading.h2 = styled(Heading.withComponent('h2'))`
  font-size: ${props => props.theme.fontSizes.size6};
  margin-bottom: ${props =>
    props.mb
      ? props.theme.space[props.mb]
      : calculatedMarginBottom(props.theme.fontSizes.size6)};
`;

Heading.h2.defaultProps = {
  color: 'grey80'
};

Heading.h3 = styled(Heading.withComponent('h3'))`
  font-size: ${props => props.theme.fontSizes.size5};
  margin-bottom: ${props =>
    props.mb
      ? props.theme.space[props.mb]
      : calculatedMarginBottom(props.theme.fontSizes.size5)};
`;

Heading.h3.defaultProps = {
  color: 'grey80'
};

Heading.h4 = styled(Heading.withComponent('h4'))`
  font-size: ${props => props.theme.fontSizes.size4};
  margin-bottom: ${props =>
    props.mb
      ? props.theme.space[props.mb]
      : calculatedMarginBottom(props.theme.fontSizes.size4)};
`;

Heading.h4.defaultProps = {
  color: 'grey80'
};

Heading.h5 = styled(Heading.withComponent('h5'))`
  font-size: ${props => props.theme.fontSizes.size2};
  margin-bottom: ${props =>
    props.mb
      ? props.theme.space[props.mb]
      : calculatedMarginBottom(props.theme.fontSizes.size2)};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.large};
`;

Heading.h5.defaultProps = {
  color: 'grey100'
};

Heading.h6 = styled(Heading.withComponent('h6'))`
  font-size: ${props => props.theme.fontSizes.size2};
  margin-bottom: ${props =>
    props.mb
      ? props.theme.space[props.mb]
      : calculatedMarginBottom(props.theme.fontSizes.size2)};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.large};
`;

Heading.h6.defaultProps = {
  color: 'grey80'
};

export default Heading;
