import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { sizes } from '../theme/avatars';
import { palette } from '../theme/colors';
import { colorForString } from '../utils';
import StyledAvatar from './StyledAvatar';
import StyledAvatarText from './StyledAvatarText';

const AVATAR_COLORS = Object.keys(palette).map(
  (color) => `palette.${color}.default`
);

const getInitials = (name) => {
  const [firstName, ...additionalNames] = name.split(' ');
  const firstInitial = firstName[0];

  if (additionalNames.length) {
    const lastName = additionalNames[additionalNames.length - 1];
    const lastInitial = lastName[0];
    return `${firstInitial}${lastInitial}`;
  }

  return firstInitial;
};

const getText = (name) =>
  name.match(/[A-Za-z]/) ? getInitials(name).toUpperCase() : name;

const Avatar = forwardRef(
  ({ name, subtle, size, baseColor: baseColorProp, ...props }, ref) => {
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

Avatar.propTypes = {
  /**
   * Base color to use for the avatar
   */
  baseColor: PropTypes.string,

  /**
   * The name for the user's avatar. The name is used to determine the color for
   * the avatar component. See utils/colorForString.
   *
   * The initials for display will also be determined based of the name
   * provided.
   */
  name: PropTypes.string.isRequired,

  /**
   * Visual size of the Avatar component
   */
  size: PropTypes.oneOf(Object.keys(sizes)),

  /**
   * Use a subtle version of the avatar's color styling.
   * */
  subtle: PropTypes.bool
};

Avatar.defaultProps = {
  baseColor: undefined,
  size: 'default',
  subtle: false
};

export default Avatar;
