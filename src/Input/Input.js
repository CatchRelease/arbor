import React from 'react';
import PropTypes from 'prop-types';

import InputContainer from './InputContainer';
import StyledInput from './StyledInput';
import Label from '../Label';
import Paragraph from '../Paragraph';

const Input = ({ caption, label, id, ...props }) => (
  <InputContainer caption={caption}>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput {...{ ...props, id }} />
    {caption && (
      <Paragraph.span variant="tiny" color="red">
        {caption}
      </Paragraph.span>
    )}
  </InputContainer>
);

Input.propTypes = {
  caption: PropTypes.string,
  id: PropTypes.string.isRequired,
  large: PropTypes.bool
};

Input.defaultProps = {
  caption: '',
  large: false
};

export default Input;
