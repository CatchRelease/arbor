import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign
} from 'styled-system';

const baseStyles = ({ theme }) => css`
  font-family: ${theme.brandFont};
`;

const Text = styled.p`
  ${baseStyles};

  ${color};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
  ${textAlign};
`;

Text.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes
};

Text.defaultProps = {
  color: 'text.default'
};

Text.p = Text.withComponent('p');
Text.span = Text.withComponent('span');

export default Text;
