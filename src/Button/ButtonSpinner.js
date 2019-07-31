import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

const spinnerColor = (disabled, variant) => {
  if (disabled) return 'text.muted';

  switch (variant) {
    case 'primary':
      return 'intent.brand.light';
    case 'secondary':
      return 'text.default';
    case 'minimal':
      return 'text.muted';
    default:
      return 'monochrome.black';
  }
};

const spinnerRadius = size => {
  switch (size) {
    case 'small':
      return 5;
    case 'medium':
      return 8;
    case 'large':
      return 10;
    case 'jumbo':
      return 12;
    default:
      return 10;
  }
};

const spinnerWidth = size => {
  switch (size) {
    case 'small':
      return 2;
    case 'medium':
      return 3;
    case 'large':
      return 4;
    case 'jumbo':
      return 5;
    default:
      return 5;
  }
};

const ButtonSpinner = ({ disabled, size, variant }) => (
  <Spinner
    color={spinnerColor(disabled, variant)}
    length={0}
    radius={spinnerRadius(size)}
    spin
    width={spinnerWidth(size)}
  />
);

ButtonSpinner.propTypes = {
  disabled: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
};

export default ButtonSpinner;
