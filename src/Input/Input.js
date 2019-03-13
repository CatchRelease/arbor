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
  caption: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  as: 'input',
  caption: '',
  label: '',
  type: 'text'
};

export default Input;
