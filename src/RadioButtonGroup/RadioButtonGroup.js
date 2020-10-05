import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton';

const groupOnChange = (e, setCheckedValueState, onChange) => {
  const {
    target: { value }
  } = e;
  setCheckedValueState(value);
  onChange(e);
};

const RadioButtonGroup = ({
  name,
  options,
  onChange,
  checkedValue,
  disabled,
  buttonProps
}) => {
  const [checkedValueState, setCheckedValueState] = useState(checkedValue);

  const buttonOnChange = (e) => {
    groupOnChange(e, setCheckedValueState, onChange);
  };

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
            onChange: buttonOnChange,
            checked: checkedValueState
              ? checkedValueState === value
              : idx === 0,
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
