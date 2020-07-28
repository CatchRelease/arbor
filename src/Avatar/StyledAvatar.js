import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import Flex from '../Flex';

import { sizes } from '../theme/avatars';

export const StyledAvatar = React.forwardRef(
  (
    {
      baseColor,
      border,
      size,
      subtle,
      theme: { avatarSizes }, // eslint-disable-line react/prop-types
      ...props
    },
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

StyledAvatar.propTypes = {
  baseColor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
  subtle: PropTypes.bool.isRequired
};

export default withTheme(StyledAvatar);
