import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledSelect from './StyledSelect';

const Select = React.forwardRef(
  ({ caption, children, label, labelAside, id, ...props }, ref) => {
    const select = (
      <StyledSelect {...{ ...props, id, ref }}>{children}</StyledSelect>
    );

    return caption || label ? (
      <FormField
        caption={caption}
        id={id}
        label={label}
        labelAside={labelAside}
      >
        {select}
      </FormField>
    ) : (
      select
    );
  }
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
  id: PropTypes.string,

  /**
   * Label text for the select
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: PropTypes.node
};

Select.defaultProps = {
  id: undefined,
  caption: '',
  label: '',
  labelAside: null
};

export default Select;
