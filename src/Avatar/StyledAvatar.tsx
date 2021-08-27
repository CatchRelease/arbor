import { forwardRef } from 'react';

import { Theme, withTheme } from '@emotion/react';

import Flex from '../Flex';
import { Size } from '../theme/avatars';

type Props = {
  baseColor: string;
  border: string;
  size: Size;
  subtle: boolean;
  theme: Theme;
};

export const StyledAvatar = forwardRef<HTMLDivElement, Props>(
  (
    { baseColor, border, size, subtle, theme: { avatarSizes }, ...props },
    ref
  ) => {
    const bg = subtle ? `monochrome.white` : baseColor;
    const borderColor = baseColor;

    return (
      <Flex
        {...{
          width: avatarSizes[size],
          height: avatarSizes[size],
          bg,
          border,
          borderColor,
          ref,
          ...props
        }}
      />
    );
  }
);

export default withTheme(StyledAvatar);
