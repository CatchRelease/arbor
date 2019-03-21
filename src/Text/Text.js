import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  minWidth,
  overflow,
  space,
  textAlign
} from 'styled-system';

import whiteSpace from '../utils/whiteSpace';

const baseStyles = ({ theme }) => css`
  font-family: ${theme.brandFont};
`;

const Text = styled.p`
  ${baseStyles};

  ${color};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${maxWidth};
  ${minWidth};
  ${overflow};
  ${space};
  ${textAlign};
  ${whiteSpace};
`;

Text.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...overflow.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...whiteSpace.propTypes
};

Text.defaultProps = {
  color: 'text.default'
};

// Deprecated -- use <Text as="span"></Text>
Text.span = props => <Text as="span" {...props} />;

export default Text;
