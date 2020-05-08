import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

const spinnerColor = (disabled, variant, intent) => {
  if (disabled) return 'text.muted';

  switch (variant) {
    case 'primary':
      return intent === 'brand' ? `intent.${intent}.light` : 'monochrome.white';
    default:
      return `intent.${intent}.default`;
  }
};

const spinnerRadius = (size) => {
  switch (size) {
    case 'small':
      return 5;
    case 'medium':
      return 6;
    case 'large':
      return 7;
    case 'jumbo':
      return 8;
    default:
      return 7;
  }
};

const spinnerWidth = (size) => {
  switch (size) {
    case 'small':
      return 2;
    case 'medium':
      return 3;
    case 'large':
      return 4;
    case 'jumbo':
      return 4;
    default:
      return 4;
  }
};

const ButtonSpinner = ({ disabled, intent, size, variant }) => (
  <Spinner
    color={spinnerColor(disabled, variant, intent)}
    length={0}
    radius={spinnerRadius(size)}
    spin
    width={spinnerWidth(size)}
  />
);

ButtonSpinner.propTypes = {
  disabled: PropTypes.bool.isRequired,
  intent: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
};

export default ButtonSpinner;
