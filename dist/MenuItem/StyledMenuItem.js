"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@emotion/react");
const Box_1 = __importDefault(require("../Box"));
const disabledStyles = ({ isDisabled, theme }) => {
    if (!isDisabled)
        return '';
    return (0, react_1.css) `
    background: ${theme.colors.monochrome.white};
    color: ${theme.colors.text.disabled};

    &:hover {
      background: ${theme.colors.monochrome.white};
      cursor: not-allowed;
    }
  `;
};
const focusedStyles = ({ isFocused, theme }) => {
    if (!isFocused)
        return '';
    return (0, react_1.css) `
    background: ${theme.colors.background.muted};
  `;
};
const selectedStyles = ({ isSelected, theme }) => {
    if (!isSelected)
        return '';
    return (0, react_1.css) `
    font-weight: ${theme.fontWeights.medium};
  `;
};
const StyledMenuItem = (0, styled_1.default)(Box_1.default) `
  background: ${({ theme }) => theme.colors.monochrome.white};
  color: ${({ theme }) => theme.colors.text.default};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.background.muted};
  }

  ${focusedStyles};
  ${selectedStyles};
  ${disabledStyles};
`;
StyledMenuItem.propTypes = {
    isDisabled: prop_types_1.default.bool,
    isFocused: prop_types_1.default.bool,
    isSelected: prop_types_1.default.bool
};
StyledMenuItem.defaultProps = {
    fontSize: 'size4',
    isDisabled: false,
    isFocused: false,
    isSelected: false,
    p: 'small'
};
exports.default = StyledMenuItem;
