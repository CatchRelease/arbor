import React from 'react';
import PropTypes from 'prop-types';

import palette from '../theme/colors/palette';
import StyledBadge from './StyledBadge';
import StyledBadgeText from './StyledBadgeText';

const Badge = ({
  color,
  children,
  iconEnd,
  iconStart,
  subtle,
  variant,
  ...props
}) => (
  <StyledBadge {...{ color, subtle, variant, ...props }}>
    <StyledBadgeText {...{ color, iconEnd, iconStart, subtle }}>
      {iconStart}
      {children}
      {iconEnd}
    </StyledBadgeText>
  </StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['', ...Object.keys(palette)]),
  iconEnd: PropTypes.node,
  iconStart: PropTypes.node,
  subtle: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'pill'])
};

Badge.defaultProps = {
  /**
   * Badge color as a key of the theme's color palette.
   * */
  color: '',

  /**
   * Use a subtle version of the badge's color styling.
   * */
  subtle: false,

  /**
   * Arbor icon to insert after badge text.
   * */
  iconEnd: undefined,

  /**
   * Arbor icon to insert before badge text.
   * */
  iconStart: undefined,

  /**
   * Badge variant.
   * */
  variant: 'default'
};

export default Badge;
