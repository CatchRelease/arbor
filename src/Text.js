import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import { space, textAlign } from 'styled-system';

import { brandFont, colors, lineHeights, typography } from './theme';

const baseStyles = css`
  font-family: ${brandFont};
  line-height: ${lineHeights.large};
`;

const variantStyles = ({ color, variant }) => css`
  color: ${color ? colors[color] : typography.text[variant].color};
  font-size: ${typography.text[variant].fontSize};
`;

const Text = styled.p`
  ${textAlign};
  ${space};
  ${baseStyles};
  ${variantStyles};
`;

Text.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors).concat('')),
  variant: PropTypes.oneOf(['ui', 'longForm', 'tiny']).isRequired,
  ...textAlign.propTypes,
  ...space.propTypes
};

Text.defaultProps = {
  color: ''
};

Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');

export default Text;
