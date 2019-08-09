import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledInput from './StyledInput';

const Input = React.forwardRef(
  ({ caption, label, labelAside, id, ...props }, ref) => (
    <FormField caption={caption} id={id} label={label} labelAside={labelAside}>
      <StyledInput {...{ ...props, id, ref }} />
    </FormField>
  )
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
   * HTML Input type
   */
  type: PropTypes.string
};

Input.defaultProps = {
  as: 'input',
  caption: '',
  label: '',
  labelAside: null,
  type: 'text'
};

export default Input;
