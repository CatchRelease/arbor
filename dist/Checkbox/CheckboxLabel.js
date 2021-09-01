"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Flex_1 = __importDefault(require("../Flex"));
const CheckboxLabel = (0, styled_1.default)(Flex_1.default) `
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;
CheckboxLabel.defaultProps = {
    as: 'label'
};
exports.default = CheckboxLabel;
