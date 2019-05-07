import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import Paragraph from '../Paragraph';
import StyledFormField from './StyledFormField';

const FormField = ({ caption, children, label, id }) => (
  <StyledFormField caption={caption}>
    {label && <Label htmlFor={id}>{label}</Label>}
    {children}
    {caption && (
      <Paragraph as="span" variant="tiny" color="red">
        {caption}
      </Paragraph>
    )}
  </StyledFormField>
);

FormField.propTypes = {
  /**
   * Optional text to be displayed underneath the input.
   */
  caption: PropTypes.string,

  /** Field to be rendered within the FormField component
   */
  children: PropTypes.node.isRequired,

  /**
   * HTML ID for the input to be used in conjunction with the label for
   * accessiblity.
   */
  id: PropTypes.string.isRequired,

  /**
   * Label text for the form field
   */
  label: PropTypes.string
};

FormField.defaultProps = {
  caption: '',
  label: ''
};

export default FormField;
