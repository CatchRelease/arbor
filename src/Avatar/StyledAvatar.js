import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import Flex from '../Flex';

import { sizes } from '../theme/avatars';

export const StyledAvatar = ({
  size,
  subtle,
  theme: { avatarSizes },
  baseColor,
  ...props
}) => {
  const bg = subtle ? `${baseColor}.lighter` : `${baseColor}.default`;
  const borderColor = subtle ? `${baseColor}.darker` : `${baseColor}.default`;

  return (
    <Flex
      {...{
        width: avatarSizes[size],
        height: avatarSizes[size],
        bg,
        borderColor,
        ...props
      }}
    />
  );
};

StyledAvatar.propTypes = {
  baseColor: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired
};

export default withTheme(StyledAvatar);
