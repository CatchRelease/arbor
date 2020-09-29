import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import styled from '@emotion/styled';
import SIZES from './sizes';
import Spinner from '../Spinner';

const StyledButtonSpinner = styled(Spinner)`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const spinnerColor = (disabled, variant, intent) => {
  if (disabled) return 'text.muted';

  switch (variant) {
    case 'primary':
      return intent === 'brand' ? `intent.${intent}.light` : 'monochrome.white';
    default:
      return `intent.${intent}.default`;
  }
};

const spinnerDiameters = {
  small: 8,
  medium: 12,
  large: 16,
  jumbo: 24
};

const ButtonSpinner = ({ disabled, intent, size, variant }) => {
  const diameter = Array.isArray(size)
    ? size.map((value) => rem(`${spinnerDiameters[value]}px`))
    : rem(`${spinnerDiameters[size]}px`);

  return (
    <StyledButtonSpinner
      diameter={diameter}
      color={spinnerColor(disabled, variant, intent)}
    />
  );
};

ButtonSpinner.propTypes = {
  disabled: PropTypes.bool.isRequired,
  intent: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(SIZES)),
    PropTypes.oneOf(SIZES)
  ]).isRequired,
  variant: PropTypes.string.isRequired
};

export default ButtonSpinner;
