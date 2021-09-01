"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledText = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const Flex_1 = __importDefault(require("../Flex"));
exports.StyledText = (0, styled_1.default)(Flex_1.default) `
  background: none;
  border: none;
  font-size: inherit;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  padding: 0;
`;
exports.StyledText.defaultProps = {
    as: 'span'
};
exports.default = exports.StyledText;
