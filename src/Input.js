import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import { placeholder, transparentize } from 'polished';

import {
  borderRadius,
  borderWidth,
  colors,
  fontSizes,
  lineHeights,
  spacings
} from './theme';

import Label from './Label';
import Text from './Text';

const InputContainer = styled.div`
  margin-bottom: ${props =>
    props.caption ? spacings.smaller : spacings.regular};
`;

InputContainer.propTypes = {
  caption: PropTypes.string
};

InputContainer.defaultProps = {
  caption: ''
};

const largeStyles = ({ large }) =>
  large &&
  css`
    padding: ${spacings.small} ${spacings.smaller};
  `;

const StyledInput = styled.input`
  border-radius: ${borderRadius.small};
  border: ${borderWidth.small} solid ${colors.grey20};
  box-sizing: border-box;
  color: ${colors.grey100};
  font-size: ${fontSizes.size2};
  line-height: ${lineHeights.small};
  margin: ${spacings.smallest} 0;
  padding: ${spacings.smaller};
  width: 100%;
  ${largeStyles};

  ${placeholder({ color: colors.grey50 })};

  &:focus {
    border: ${borderWidth.small} solid ${colors.blueLight};
    box-shadow: 0 0 8px ${transparentize(0.9, colors.blueLight)};
  }

  &:disabled {
    background: ${colors.white10};
  }
`;

const Input = ({ caption, label, id, ...props }) => (
  <InputContainer caption={caption}>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput {...{ ...props, id }} />
    {caption && (
      <Text.span variant="tiny" color="red" withoutMargin>
        {caption}
      </Text.span>
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
