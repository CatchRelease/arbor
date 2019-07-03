import React from 'react';
import PropTypes from 'prop-types';

import { colorForString } from '../utils';
import StyledAvatar from './StyledAvatar';
import StyledAvatarText from './StyledAvatarText';

const AVATAR_COLORS = [
  'palette.blue',
  'palette.red',
  'palette.yellow',
  'palette.green'
];

const getInitials = name => {
  const [firstName, ...additionalNames] = name.split(' ');
  const firstInitial = firstName[0];

  if (additionalNames.length) {
    const lastName = additionalNames[additionalNames.length - 1];
    const lastInitial = lastName[0];
    return `${firstInitial}${lastInitial}`;
  }

  return firstInitial;
};

const Avatar = ({ name, subtle, ...props }) => {
  const baseColor = colorForString(name, AVATAR_COLORS);

  return (
    <StyledAvatar
      {...{
        alignItems: 'center',
        baseColor,
        border: '1px solid',
        borderRadius: '50%',
        justifyContent: 'center',
        subtle,
        ...props
      }}
    >
      <StyledAvatarText {...{ ...props, baseColor, subtle }}>
        {getInitials(name).toUpperCase()}
      </StyledAvatarText>
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  /**
   * The name for the user's avatar. The name is used to determine the color for
   * the avatar component. See utils/colorForString.
   *
   * The initials for display will also be determined based of the name
   * provided.
   */
  name: PropTypes.string.isRequired,

  /**
   * Use a subtle version of the avatar's color styling.
   * */
  subtle: PropTypes.bool
};

Avatar.defaultProps = {
  subtle: false
};

export default Avatar;
