import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledSelect from './StyledSelect';

const Select = React.forwardRef(
  ({ caption, children, label, id, ...props }, ref) => (
    <FormField caption={caption} id={id} label={label}>
      <StyledSelect {...{ ...props, id, ref }}>{children}</StyledSelect>
    </FormField>
  )
);

Select.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

Select.defaultProps = {
  caption: '',
  label: ''
};

export default Select;
