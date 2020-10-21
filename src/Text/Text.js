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

import textTransform from '../utils/textTransform';
import textOverflow from '../utils/textOverflow';
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
  ${textTransform};
  ${textOverflow};
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
  ...textTransform.propTypes,
  ...textOverflow.propTypes,
  ...whiteSpace.propTypes
};

Text.defaultProps = {
  color: 'text.default',
  fontSize: 'size4',
  lineHeight: 'small'
};

// Deprecated -- use <Text as="span"></Text>
Text.Span = (props) => <Text as="span" {...props} />;

export default Text;
