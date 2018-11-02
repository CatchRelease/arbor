import styled, { css } from 'react-emotion';
import { space, textAlign, color } from 'styled-system';

const baseStyles = ({ theme }) => css`
  font-family: ${theme.brandFont};
  line-height: ${theme.lineHeights.large};
`;

const Text = styled.p`
  ${textAlign};
  ${color};
  ${space};
  ${baseStyles};
`;

Text.propTypes = {
  ...color.propTypes,
  ...textAlign.propTypes,
  ...space.propTypes
};

export default Text;
