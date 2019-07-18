import { css } from '@emotion/core';
import { placeholder, transparentize } from 'polished';

const disabledStyles = theme => css`
  background: ${theme.colors.background.default};
`;

const focusedStyles = theme => css`
  border: ${theme.borderWidth.small} solid ${theme.colors.intent.brand.dark};
  box-shadow: 0 0 8px ${transparentize(0.9, theme.colors.intent.brand.light)};
  outline: none;
`;

const inputStyles = ({ isDisabled, isFocused, theme }) => css`
  border-radius: ${theme.radii.small};
  border: ${theme.borderWidth.small} solid ${theme.colors.border.default};
  box-sizing: border-box;
  color: ${theme.colors.text.default};
  font-family: ${theme.brandFont};
  font-size: ${theme.fontSizes.input.default};
  line-height: ${theme.lineHeights.small};
  margin: ${theme.space.smallest} 0;
  padding: ${theme.space.smaller};
  width: 100%;

  @media (max-width: ${theme.breakpointsMap.md}) {
    font-size: ${theme.fontSizes.input.mobile};
  }

  ${placeholder({ color: theme.colors.text.placeholder })};
  ${isDisabled ? disabledStyles(theme) : ''};
  ${isFocused ? focusedStyles(theme) : ''};

  &:focus {
    ${focusedStyles(theme)};
  }

  &:disabled {
    ${disabledStyles(theme)};
  }

  &:required {
    box-shadow: none;
  }
`;

export default inputStyles;
