import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

import Text from './Text';

const variantColor = ({ color, theme, variant }) =>
  color === undefined &&
  css`
    color: ${theme.typography.text[variant].color};
  `;

const variantStyles = ({ theme, variant }) => css`
  font-size: ${theme.typography.text[variant].fontSize};
`;

const Paragraph = styled(Text)`
  line-height: ${props => props.theme.lineHeights.small};
  ${variantColor};
  ${variantStyles};
`;

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['ui', 'longForm', 'tiny']).isRequired
};

Paragraph.p = Paragraph.withComponent('p');
Paragraph.span = Paragraph.withComponent('span');

export default Paragraph;
