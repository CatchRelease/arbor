import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Label from '../Label';
import Paragraph from '../Paragraph';
import StyledFormField from './StyledFormField';

const FormField = ({ caption, children, label, labelAside, id }) => (
  <StyledFormField caption={caption}>
    <Flex alignItems="center">
      {label && (
        <Flex flex="1" alignItems="center">
          <Label htmlFor={id}>{label}</Label>
        </Flex>
      )}
      {labelAside && (
        <Flex color="text.muted" fontSize="size4">
          {labelAside}
        </Flex>
      )}
    </Flex>
    {children}
    {caption && (
      <Paragraph as="span" variant="tiny" color="palette.red.default">
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
   * accessibility.
   */
  id: PropTypes.string.isRequired,

  /**
   * Label text for the form field
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /**
   * Component that goes to the right of the label. Does not have to only be text.
   */
  labelAside: PropTypes.node
};

FormField.defaultProps = {
  caption: '',
  label: '',
  labelAside: null
};

export default FormField;
