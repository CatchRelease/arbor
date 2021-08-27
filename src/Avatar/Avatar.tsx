import { forwardRef } from 'react';

import { Size } from '../theme/avatars';
import { palette } from '../theme/colors';
import { colorForString } from '../utils';
import StyledAvatar from './StyledAvatar';
import StyledAvatarText from './StyledAvatarText';

const AVATAR_COLORS = Object.keys(palette).map(
  (color) => `palette.${color}.default`
);

const getInitials = (name: string) => {
  const [firstName, ...additionalNames] = name.split(' ');
  const firstInitial = firstName[0];

  if (additionalNames.length) {
    const lastName = additionalNames[additionalNames.length - 1];
    const lastInitial = lastName[0];
    return `${firstInitial}${lastInitial}`;
  }

  return firstInitial;
};

const getText = (name: string) =>
  name.match(/[A-Za-z]/) ? getInitials(name).toUpperCase() : name;

type Props = {
  baseColor?: string;
  name: string;
  size?: Size;
  subtle?: boolean;
};

const Avatar = forwardRef<HTMLDivElement, Props>(
  (
    {
      name,
      subtle = false,
      size = 'default',
      baseColor: baseColorProp,
      ...props
    },
    ref
  ) => {
    const baseColor = baseColorProp || colorForString(name, AVATAR_COLORS);

    return (
      <StyledAvatar
        {...{
          alignItems: 'center',
          baseColor,
          border: '1px solid',
          borderRadius: '50%',
          justifyContent: 'center',
          size,
          subtle,
          ref,
          ...props
        }}
      >
        <StyledAvatarText {...{ baseColor, size, subtle }}>
          {getText(name)}
        </StyledAvatarText>
      </StyledAvatar>
    );
  }
);

export default Avatar;
