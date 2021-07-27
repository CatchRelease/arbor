"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const polished_1 = require("polished");
const Flex_1 = __importDefault(require("../Flex"));
const baseStyles = ({ theme }) => react_1.css `
  background-color: ${theme.colors.monochrome.white};
  border-radius: ${theme.radii.small};
  border: 1px solid ${theme.colors.grey60};
  color: ${theme.colors.monochrome.white};
  flex-shrink: 0;
  height: ${polished_1.rem('16px')};
  width: ${polished_1.rem('16px')};
`;
const checkedStyles = ({ theme, checked, indeterminate }) => checked &&
    react_1.css `
    background-color: ${indeterminate
        ? theme.colors.monochrome.white
        : theme.colors.intent.brand.dark};
    border-color: ${theme.colors.intent.brand.dark};
    color: ${indeterminate
        ? theme.colors.intent.brand.dark
        : theme.colors.intent.brand.light};
  `;
const disabledStyles = ({ theme, checked, disabled }) => disabled &&
    react_1.css `
    background: ${checked
        ? theme.colors.monochrome.grey40
        : theme.colors.monochrome.white};
    border-color: ${theme.colors.border.default};
    color: ${checked ? theme.colors.grey60 : theme.colors.monochrome.white};
    cursor: not-allowed;
  `;
const StyledCheckbox = styled_1.default(Flex_1.default) `
  ${baseStyles};
  ${checkedStyles};
  ${disabledStyles};
`;
StyledCheckbox.defaultProps = {
    alignItems: 'center',
    justifyContent: 'center'
};
exports.default = StyledCheckbox;
