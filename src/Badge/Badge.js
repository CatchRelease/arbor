import React from 'react';
import PropTypes from 'prop-types';

import palette from '../theme/colors/palette';
import Grid from '../Grid';
import StyledBadge from './StyledBadge';
import Text from '../Text';

const getTextColor = (color, subtle) => {
  if (color) {
    return subtle ? `palette.${color}.dark` : 'monochrome.white';
  }

  return subtle ? 'monochrome.grey80' : 'monochrome.white';
};

const getGridTemplateColumns = (iconStart, iconEnd) => {
  if (iconStart && iconEnd) {
    return '0fr 1fr 0fr';
  }
  if (iconStart) {
    return '0fr 1fr';
  }
  if (iconEnd) {
    return '1fr 0fr';
  }
  return '1fr';
};

const Badge = ({
  color,
  children,
  iconEnd,
  iconStart,
  subtle,
  variant,
  ...props
}) => {
  const textColor = getTextColor(color, subtle);
  const gridTemplateColumns = getGridTemplateColumns(iconStart, iconEnd);

  return (
    <StyledBadge {...{ color, subtle, variant, ...props }}>
      <Grid
        color={textColor}
        alignItems="center"
        gridTemplateColumns={gridTemplateColumns}
        gridGap="smallest"
      >
        {iconStart}
        <Text
          {...{
            as: 'span',
            color: textColor,
            fontSize: 'size3',
            fontWeight: 'medium',
            iconStart: undefined,
            lineHeight: 'large',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {children}
        </Text>
        {iconEnd}
      </Grid>
    </StyledBadge>
  );
};

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
