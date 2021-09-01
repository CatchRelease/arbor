"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
const polished_1 = require("polished");
const Flex_1 = __importDefault(require("../Flex"));
const baseStyles = ({ theme }) => (0, react_1.css) `
  color: ${theme.colors.monochrome.white};
  border: 1px solid ${theme.colors.grey60};
  border-radius: 50%;
  flex-shrink: 0;
  height: ${(0, polished_1.rem)('16px')};
  width: ${(0, polished_1.rem)('16px')};
`;
const checkedStyles = ({ theme, checked }) => checked &&
    (0, react_1.css) `
    color: ${theme.colors.intent.brand.dark};
  `;
const disabledStyles = ({ theme, checked, disabled }) => disabled &&
    (0, react_1.css) `
    border-color: ${theme.colors.border.default};
    color: ${checked ? theme.colors.grey60 : theme.colors.monochrome.white};
  `;
const StyledRadioButton = (0, styled_1.default)(Flex_1.default) `
  ${baseStyles};
  ${checkedStyles};
  ${disabledStyles};
`;
StyledRadioButton.defaultProps = {
    alignItems: 'center',
    justifyContent: 'center'
};
exports.default = StyledRadioButton;
