import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import Text from '../Text';
import { sizes } from '../theme/avatars';

export const StyledAvatarText = ({
  baseColor,
  size,
  subtle,
  theme: { avatarFontSizes },
  ...props
}) => {
  const color = subtle ? `${baseColor}.darker` : 'monochrome.white';
  const fontSize = avatarFontSizes[size];

  return <Text {...{ color, fontSize, ...props }} />;
};

StyledAvatarText.propTypes = {
  baseColor: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
  subtle: PropTypes.bool.isRequired,
  theme: PropTypes.shape(PropTypes.objectOf(PropTypes.string)).isRequired
};

export default withTheme(StyledAvatarText);
