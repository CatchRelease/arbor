import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, fontSize, space, textAlign } from 'styled-system';

const baseStyles = ({ theme }) => css`
  font-family: ${theme.brandFont};
  line-height: ${theme.lineHeights.large};
`;

const Text = styled.p`
  ${color};
  ${fontSize};
  ${space};
  ${textAlign};
  ${baseStyles};
`;

Text.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes
};

Text.p = Text.withComponent('p');
Text.span = Text.withComponent('span');

export default Text;
