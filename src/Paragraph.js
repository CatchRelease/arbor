import styled from 'react-emotion';
import PropTypes from 'prop-types';

import {
  brandFont,
  colors,
  fontWeights,
  fontSizes,
  lineHeights
} from './theme';

const Paragraph = styled.p`
  font-family: ${brandFont};
  font-weight: ${fontWeights.regular};
  line-height: ${lineHeights.large};
  color: ${props => colors[props.color]};
`;

Paragraph.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)).isRequired
};

Paragraph.UI = styled(Paragraph.withComponent('p'))`
  font-size: ${fontSizes.size2};
  margin-bottom: ${fontSizes.size2};
  color: ${colors.grey100};
`;

Paragraph.UI.defaultProps = {
  color: 'grey100'
};

Paragraph.LongForm = styled(Paragraph.withComponent('p'))`
  font-size: ${fontSizes.size3};
  margin-bottom: ${fontSizes.size3};
`;

Paragraph.LongForm.defaultProps = {
  color: 'grey100'
};

Paragraph.Tiny = styled(Paragraph.withComponent('p'))`
  font-size: ${fontSizes.size1};
  margin-bottom: ${fontSizes.size1};
`;

Paragraph.Tiny.defaultProps = {
  color: 'grey80'
};

export default Paragraph;
