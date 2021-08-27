import { FC } from 'react';

import { Theme, withTheme } from '@emotion/react';

import Text from '../Text';
import { Size } from '../theme/avatars';

type Props = {
  baseColor: string;
  size: Size;
  subtle: boolean;
  theme: Theme;
};

export const StyledAvatarText: FC<Props> = ({
  baseColor,
  size,
  subtle,
  theme: { avatarFontSizes },
  ...props
}) => {
  const color = subtle ? baseColor : 'monochrome.white';
  const fontSize = avatarFontSizes[size];

  return <Text {...{ color, fontSize, ...props }} />;
};

export default withTheme(StyledAvatarText);
