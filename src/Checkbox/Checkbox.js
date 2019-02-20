import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Text from '../Text';

import CheckboxIcon from './CheckboxIcon';
import CheckboxInput from './CheckboxInput';
import CheckboxLabel from './CheckboxLabel';
import StyledCheckbox from './StyledCheckbox';

const Checkbox = ({
  id,
  name,
  label,
  disabled,
  isInvalid,
  checked,
  onChange,
  value,
  indeterminate,
  icon,
  ...props
}) => (
  <CheckboxLabel alignItems="center" my="regular" {...props}>
    <CheckboxInput
      id={id}
      type="checkbox"
      name={name}
      value={value}
      checked={checked || indeterminate}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={isInvalid}
    />

    <StyledCheckbox {...{ disabled, checked, indeterminate }}>
      <CheckboxIcon {...{ checked, indeterminate }} />
    </StyledCheckbox>

    {icon && (
      <Icon
        fontSize="24px"
        name={icon}
        color={disabled ? 'icon.disabled' : 'icon.default'}
        ml="smaller"
      />
    )}

    <Text.span
      fontSize="size4"
      color={disabled ? 'text.disabled' : 'text.default'}
      ml={icon ? 'smallest' : 'smaller'}
    >
      {label}
    </Text.span>
  </CheckboxLabel>
);

Checkbox.propTypes = {
  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string.isRequired,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.node.isRequired,

  /**
   * The name attribute of the checkbox.
   */
  name: PropTypes.string.isRequired,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  isInvalid: false,
  onChange: () => {},
  value: ''
};

export default Checkbox;
