import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../FormField';
import StyledAutoComplete from './StyledAutoComplete';

const AutoComplete = ({ caption, id, label, ...props }) => (
  <FormField caption={caption} id={id} label={label}>
    <StyledAutoComplete aria-label={label} {...props} />
  </FormField>
);

AutoComplete.propTypes = {
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
  label: PropTypes.string.isRequired

  /**
   * All react-select props can be passed through to customize ReactSelect Components
   */
};

AutoComplete.defaultProps = {
  caption: ''
};

export default AutoComplete;
