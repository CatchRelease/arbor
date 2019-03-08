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
      <Paragraph.span variant="tiny" color="red">
        {caption}
      </Paragraph.span>
    )}
  </StyledFormField>
);

FormField.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

FormField.defaultProps = {
  caption: '',
  label: ''
};

export default FormField;
