import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Text from '../Text';
import { colors, fontSizes, fontWeights } from '../theme';

const getColor = ({ color, subtle, theme }) => {
  if (color) {
    return subtle
      ? theme.colors.palette[color].dark
      : theme.colors.monochrome.white;
  }

  return subtle
    ? theme.colors.monochrome.grey80
    : theme.colors.monochrome.white;
};

const iconStyling = ({ iconEnd, iconStart, theme }) => {
  const iconStartStyles = `i:first-of-type {
    margin-right: ${theme.space.smallest};
  }`;

  const iconEndStyles = `i:last-of-type {
    margin-left: ${theme.space.smallest};
  }`;

  if (iconEnd && iconStart) return iconStartStyles + iconEndStyles;
  if (iconStart) return iconStartStyles;
  return iconEndStyles;
};

const StyledBadge = styled(Text)`
  color: ${getColor};
  text-overflow: ellipsis;

  ${iconStyling};
`;

StyledBadge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  color: PropTypes.oneOf(['', ...Object.keys(colors.palette)]),
  fontSize: PropTypes.oneOf(Object.keys(fontSizes)),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
  iconEnd: PropTypes.node,
  iconStart: PropTypes.node,
  subtle: PropTypes.bool
};

StyledBadge.defaultProps = {
  color: 'monochrome.white',
  fontSize: 'size3',
  fontWeight: 'medium',
  iconEnd: undefined,
  iconStart: undefined,
  overflow: 'hidden',
  subtle: false,
  whiteSpace: 'nowrap'
};

export default StyledBadge;
