"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const polished_1 = require("polished");
const disabledStyles = (theme) => (0, react_1.css) `
  background: ${theme.colors.background.default};
`;
const focusedStyles = (theme) => (0, react_1.css) `
  border: ${theme.borderWidth.small} solid ${theme.colors.intent.brand.dark};
  box-shadow: 0 0 8px ${(0, polished_1.transparentize)(0.9, theme.colors.intent.brand.light)};
  outline: none;
`;
const invalidStyles = (theme) => (0, react_1.css) `
  border: ${theme.borderWidth.small} solid ${theme.colors.palette.red.default};
  background: ${theme.colors.palette.red.lighter};
`;
/* stylelint-disable property-no-vendor-prefix */
const hideArrowsStyles = (0, react_1.css) `
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
const inputStyles = ({ hideArrows, isDisabled, isFocused, isInvalid, theme }) => (0, react_1.css) `
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

  ${hideArrows ? hideArrowsStyles : ''}
`;
exports.default = inputStyles;
