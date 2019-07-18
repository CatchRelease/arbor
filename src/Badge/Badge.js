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
  paletteColor,
  children,
  iconEnd,
  iconStart,
  subtle,
  variant,
  ...props
}) => {
  const textColor = getTextColor(paletteColor, subtle);
  const gridTemplateColumns = getGridTemplateColumns(iconStart, iconEnd);

  return (
    <StyledBadge {...{ paletteColor, subtle, variant, ...props }}>
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
  /**
   * Content to render within the badge
   */
  children: PropTypes.string.isRequired,

  /**
   * Badge color as a key of the theme's color palette.
   * */
  paletteColor: PropTypes.oneOf(['', ...Object.keys(palette)]),

  /**
   * Arbor icon to insert after badge text.
   * */
  iconEnd: PropTypes.node,

  /**
   * Arbor icon to insert before badge text.
   * */
  iconStart: PropTypes.node,

  /**
   * Use a subtle version of the badge's color styling.
   * */

  subtle: PropTypes.bool,

  /**
   * Badge variant.
   * */
  variant: PropTypes.oneOf(['default', 'pill'])
};

Badge.defaultProps = {
  paletteColor: '',
  subtle: false,
  iconEnd: undefined,
  iconStart: undefined,
  variant: 'default'
};

export default Badge;
