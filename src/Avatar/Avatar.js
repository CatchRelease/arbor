import React from 'react';
import PropTypes from 'prop-types';

import { colorForString } from '../utils';
import Flex from '../Flex';
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

const Avatar = ({ name }) => (
  <Flex
    alignItems="center"
    bg={colorForString(name, AVATAR_COLORS)}
    borderRadius="50%"
    height="24px"
    justifyContent="center"
    width="24px"
  >
    <Text color="white" fontSize="size2">
      {getInitials(name).toUpperCase()}
    </Text>
  </Flex>
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired
};

export default Avatar;
