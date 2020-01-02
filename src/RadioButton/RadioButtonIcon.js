import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const iconFontSize = '16px';

const RadioButtonIcon = ({ checked }) => {
  if (checked) {
    return <Icon name="radio-checked" fontSize={iconFontSize} />;
  }

  return null;
};

RadioButtonIcon.propTypes = {
  /**
   * Whether or not the checkbox is checked.
   */
  checked: PropTypes.bool
};

RadioButtonIcon.defaultProps = {
  checked: false
};

export default RadioButtonIcon;
