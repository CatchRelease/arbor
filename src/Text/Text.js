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

import createWithComponent from '../utils/createWithComponent';

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
  ...textAlign.propTypes
};

Text.defaultProps = {
  color: 'text.default'
};

Text.p = createWithComponent(Text, 'p');
Text.span = createWithComponent(Text, 'span');

export default Text;
