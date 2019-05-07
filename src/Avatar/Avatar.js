import React from 'react';
import PropTypes from 'prop-types';

import { colorForString } from '../utils';
import StyledAvatar from './StyledAvatar';
import Text from '../Text';

const AVATAR_COLORS = ['blue', 'red', 'bronze', 'green'];

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

const Avatar = ({ name, ...props }) => (
  <StyledAvatar
    {...{
      alignItems: 'center',
      bg: colorForString(name, AVATAR_COLORS),
      borderRadius: '50%',
      justifyContent: 'center',
      ...props
    }}
  >
    <Text color="white" fontSize="size2">
      {getInitials(name).toUpperCase()}
    </Text>
  </StyledAvatar>
);

Avatar.propTypes = {
  /**
   * The name for the user's avatar. The name is used to determine the color for
   * the avatar component. See utils/colorForString.
   *
   * The initials for display will also be determined based of the name
   * provided.
   */
  name: PropTypes.string.isRequired
};

export default Avatar;
