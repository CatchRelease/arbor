import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledInput from './StyledInput';

const Input = React.forwardRef(
  (
    { caption, label, labelAside, id, onBlur, onChange, validate, ...props },
    ref
  ) => {
    const [touched, setTouched] = useState(false);
    const [value, setValue] = useState(props.value);

    const errorMessage = touched && validate(value);

    const handleBlur = (event) => {
      setTouched(true);

      if (onBlur) {
        onBlur(event);
      }
    };

    const handleChange = (event) => {
      setValue(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <FormField
        caption={errorMessage || caption}
        id={id}
        label={label}
        labelAside={labelAside}
      >
        <StyledInput
          {...{ ...props, id, ref }}
          isInvalid={!!errorMessage}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </FormField>
    );
  }
);

Input.propTypes = {
  /**
   * The actualy HTML element tag to use when rendering.
   */
  as: PropTypes.string,

  /**
   * Optional text to be displayed underneath the input.
   */
  caption: PropTypes.string,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: PropTypes.string.isRequired,

  /**
   * Label text for the form field
   */
  label: PropTypes.string,

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: PropTypes.node,

  /**
   * Function called when input loses focus.
   */
  onBlur: PropTypes.func,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * HTML Input type
   */
  type: PropTypes.string,

  /**
   * Optional validate function.
   */
  validate: PropTypes.func,

  /**
   * HTML Input value
   */
  value: PropTypes.string
};

Input.defaultProps = {
  as: 'input',
  caption: '',
  label: '',
  labelAside: null,
  onBlur: undefined,
  onChange: undefined,
  type: 'text',
  validate: () => undefined,
  value: undefined
};

export default Input;
