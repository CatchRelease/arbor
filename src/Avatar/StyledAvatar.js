import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import Flex from '../Flex';

import { sizes } from '../theme/avatars';

export const StyledAvatar = ({
  baseColor,
  border,
  size,
  subtle,
  theme: { avatarSizes },
  ...props
}) => {
  const bg = subtle ? `monochrome.white` : `${baseColor}.default`;
  const borderColor = `${baseColor}.default`;

  return (
    <Flex
      {...{
        width: avatarSizes[size],
        height: avatarSizes[size],
        bg,
        border,
        borderColor,
        ...props
      }}
    />
  );
};

StyledAvatar.propTypes = {
  baseColor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
  subtle: PropTypes.bool.isRequired,
  theme: PropTypes.shape(PropTypes.objectOf(PropTypes.string)).isRequired
};

export default withTheme(StyledAvatar);
