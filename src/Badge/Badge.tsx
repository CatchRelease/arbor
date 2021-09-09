import { FC, ReactNode } from 'react';

import { PaletteColor } from '../theme/colors/palette';
import Grid from '../Grid';
import StyledBadge from './StyledBadge';
import Text from '../Text';
import Variant from './variant';

const getTextColor = (color?: PaletteColor, subtle?: boolean) => {
  if (color) {
    return subtle ? `palette.${color}.dark` : 'monochrome.white';
  }

  return subtle ? 'monochrome.grey80' : 'monochrome.white';
};

const getGridTemplateColumns = (iconStart: ReactNode, iconEnd: ReactNode) => {
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

type Props = {
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  paletteColor?: PaletteColor;
  subtle?: boolean;
  variant?: Variant;
};

const Badge: FC<Props> = ({
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

Badge.defaultProps = {
  paletteColor: 'neutral',
  subtle: false,
  iconEnd: undefined,
  iconStart: undefined,
  variant: 'default'
};

export default Badge;
