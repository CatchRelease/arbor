import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { brandFont, colors, fontSizes, lineHeights } from './theme';

const Label = styled.label`
  color: ${colors.grey80};
  display: block;
  font-family: ${brandFont};
  font-size: ${fontSizes.size2};
  line-height: ${lineHeights.large};
`;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;
