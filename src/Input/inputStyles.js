import { css } from '@emotion/react';
import { transparentize } from 'polished';

const disabledStyles = (theme) => css`
  background: ${theme.colors.background.default};
`;

const focusedStyles = (theme) => css`
  border: ${theme.borderWidth.small} solid ${theme.colors.intent.brand.dark};
  box-shadow: 0 0 8px ${transparentize(0.9, theme.colors.intent.brand.light)};
  outline: none;
`;

const invalidStyles = (theme) => css`
  border: ${theme.borderWidth.small} solid ${theme.colors.palette.red.default};
  background: ${theme.colors.palette.red.lighter};
`;

/* stylelint-disable property-no-vendor-prefix */
const hideArrowsAddedByBrowsers = css`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
/* stylelint-enable property-no-vendor-prefix */

const inputStyles = ({ isDisabled, isFocused, isInvalid, theme }) => css`
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

  ::placeholder {
    color: ${theme.colors.text.placeholder};
  }
  ${isDisabled ? disabledStyles(theme) : ''};
  ${isFocused ? focusedStyles(theme) : ''};
  ${isInvalid ? invalidStyles(theme) : ''};

  &:focus {
    ${focusedStyles(theme)};
  }

  &:disabled {
    ${disabledStyles(theme)};
  }

  &:required {
    box-shadow: none;
  }

  ${hideArrowsAddedByBrowsers}
`;

export default inputStyles;
