import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledInput from './StyledInput';

const Input = React.forwardRef(({ caption, label, id, ...props }, ref) => (
  <FormField caption={caption} id={id} label={label}>
    <StyledInput {...{ ...props, id, ref }} />
  </FormField>
));

Input.propTypes = {
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
   * HTML Input type
   */
  type: PropTypes.string
};

Input.defaultProps = {
  as: 'input',
  caption: '',
  label: '',
  type: 'text'
};

export default Input;
