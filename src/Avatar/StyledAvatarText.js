import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import Text from '../Text';
import { sizes } from '../theme/avatars';

export const StyledAvatarText = ({
  size,
  subtle,
  theme: { avatarFontSizes },
  baseColor,
  ...props
}) => {
  const color = subtle ? `${baseColor}.darker` : 'monochrome.white';
  const fontSize = avatarFontSizes[size];

  return <Text {...{ color, fontSize, ...props }} />;
};

StyledAvatarText.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired
};

export default withTheme(StyledAvatarText);
