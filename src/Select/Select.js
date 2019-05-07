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
  /**
   * Help text to be displayed in the FormField for the Select.
   */
  caption: PropTypes.string,

  /**
   * Select options to be displayed within the menu
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,

  /**
   * HTML ID for the select
   */
  id: PropTypes.string.isRequired,

  /**
   * Label text for the select
   */
  label: PropTypes.string
};

Select.defaultProps = {
  caption: '',
  label: ''
};

export default Select;
