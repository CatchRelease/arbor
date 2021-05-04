import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton';

const RadioButtonGroup = ({
  name,
  options,
  onChange,
  checkedValue,
  disabled,
  buttonProps
}) => {
  return (
    <>
      {options.map(({ label, value, disabled: optionDisabled }, idx) => (
        <RadioButton
          {...{
            id: `${name}:${value}`,
            key: `${name}:${value}`,
            name,
            disabled: disabled || optionDisabled,
            label,
            value,
            onChange,
            checked: checkedValue ? checkedValue === value : idx === 0,
            ...buttonProps
          }}
        />
      ))}
    </>
  );
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  checkedValue: PropTypes.string,
  disabled: PropTypes.bool,
  buttonProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

RadioButtonGroup.defaultProps = {
  checkedValue: null,
  buttonProps: {},
  disabled: false
};

export default RadioButtonGroup;
