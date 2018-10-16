import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

import { brandFont, colors, lineHeights, typography } from './theme';

const baseStyles = css`
  font-family: ${brandFont};
  line-height: ${lineHeights.large};
`;

const variantStyles = ({ color, variant }) => css`
  color: ${color ? colors[color] : typography.text[variant].color};
  font-size: ${typography.text[variant].fontSize};
  margin-bottom: ${typography.text[variant].fontSize};
`;

const withoutMarginStyles = ({ withoutMargin }) =>
  withoutMargin &&
  css`
    margin-bottom: 0;
  `;

const Text = styled.p`
  ${baseStyles};
  ${variantStyles};
  ${withoutMarginStyles};
`;

Text.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors).concat('')),
  variant: PropTypes.oneOf(['ui', 'longForm', 'tiny']).isRequired,
  withoutMargin: PropTypes.bool
};

Text.defaultProps = {
  color: '',
  withoutMargin: false
};

Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');

export default Text;
