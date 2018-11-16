import styled, { css } from 'react-emotion';
import { color, fontSize, space, textAlign, lineHeight } from 'styled-system';

const baseStyles = ({ theme }) => css`
  font-family: ${theme.brandFont};
`;

const Text = styled.p`
  ${color};
  ${fontSize};
  ${space};
  ${textAlign};
  ${lineHeight};
  ${baseStyles};
`;

Text.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes
};

Text.p = Text.withComponent('p');
Text.span = Text.withComponent('span');

export default Text;
