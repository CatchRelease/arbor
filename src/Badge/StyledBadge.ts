import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Flex from '../Flex';
import { PaletteColor } from '../theme/colors/palette';
import Variant from './variant';

const getBackground = ({
  paletteColor,
  subtle,
  theme
}: {
  paletteColor?: PaletteColor;
  subtle?: boolean;
  theme: Theme;
}) => {
  if (paletteColor) {
    return subtle
      ? theme.colors.palette[paletteColor].lighter
      : theme.colors.palette[paletteColor].default;
  }

  return subtle
    ? theme.colors.monochrome.grey20
    : theme.colors.monochrome.grey100;
};

const getBorderColor = ({
  paletteColor,
  theme
}: {
  paletteColor?: PaletteColor;
  theme: Theme;
}) =>
  paletteColor
    ? theme.colors.palette[paletteColor].default
    : theme.colors.monochrome.grey100;

type Props = {
  subtle?: boolean;
  variant?: Variant;
};

const StyledBadge = styled(Flex)<Props>`
  background: ${getBackground};
  border-color: ${getBorderColor};
  border-radius: ${(props) => (props.variant === 'pill' ? '999px' : '2px')};
`;

StyledBadge.defaultProps = {
  alignItems: 'center',
  border: '1px solid',
  height: '24px',
  maxWidth: '100%',
  px: 'smaller'
};

export default StyledBadge;
