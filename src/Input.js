import React, { Fragment } from 'react';
import styled from 'react-emotion';
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
import Paragraph from './Paragraph';

const StyledInput = styled.input`
  border-radius: ${borderRadius.small};
  border: ${borderWidth.small} solid ${colors.grey20};
  box-sizing: border-box;
  color: ${colors.black};
  font-size: ${fontSizes.size2};
  line-height: ${lineHeights.small};
  padding: ${spacings.smaller};
  width: 100%;

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
  <Fragment>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput {...{ ...props, id }} />
    {caption && <Paragraph.Tiny color="red">{caption}</Paragraph.Tiny>}
  </Fragment>
);

Input.propTypes = {
  caption: PropTypes.string,
  id: PropTypes.string.isRequired
};

Input.defaultProps = {
  caption: ''
};

export default Input;
