import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledTextarea from './StyledTextarea';

const Textarea = React.forwardRef(({ caption, label, id, ...props }, ref) => (
  <FormField caption={caption} id={id} label={label}>
    <StyledTextarea {...{ ...props, id, ref }} />
  </FormField>
));

Textarea.propTypes = {
  caption: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

Textarea.defaultProps = {
  caption: '',
  label: ''
};

export default Textarea;
