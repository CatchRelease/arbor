import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const iconFontSize = '16px';

const CheckboxIcon = ({ checked, indeterminate }) => {
  if (indeterminate) {
    return <Icon name="checkbox-indeterminate" fontSize={iconFontSize} />;
  }

  if (checked) {
    return <Icon name="checkbox-checked" fontSize={iconFontSize} />;
  }

  return null;
};

CheckboxIcon.propTypes = {
  /**
   * Whether or not the checkbox is checked.
   */
  checked: PropTypes.bool,

  /**
   * Checkbox's indeterminate state.
   */
  indeterminate: PropTypes.bool
};

CheckboxIcon.defaultProps = {
  checked: false,
  indeterminate: false
};

export default CheckboxIcon;
